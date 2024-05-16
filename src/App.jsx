import { createSignal } from "solid-js";
import Button from "./components/Button";
import Card from "./components/Card";
import Score from "./components/Score";
import cardValues from "../src/utility/cardValues.json";
import { dealCard } from "./utility/dealCard";
import { calculateHandValue } from "./utility/calculateHandValue";

function App() {
    const [hand, setHand] = createSignal([]);
    const [dealer, setDealer] = createSignal([]);
    const [state, setState] = createSignal(0);
    const [result, setResult] = createSignal(null);

    const handleDeal = async () => {
        if (state() !== 0) return;
        setResult(null);
        setState(1);
        let cardsDrawn = [];
        cardsDrawn.push(dealCard([]));
        cardsDrawn.push(dealCard(cardsDrawn));
        setHand(cardsDrawn);
        setDealer([dealCard(cardsDrawn)]);
        checkEnd();
    };

    const handleHit = async () => {
        if (state() !== 1) return;
        const newHand = [...hand(), dealCard([...dealer(), ...hand()])];
        setHand(newHand);
        await delay(700);
        checkEnd();
    };

    const handleStand = async () => {
        if (state() !== 1) return;
        setState(2);
        const playerScores = calculateHandValue(hand());
        const finalizeScore =
            playerScores.length > 1 ? playerScores[1] : playerScores[0];
        const compareDealerHand = () => {
            const hand = calculateHandValue(dealer());
            if (hand.length < 2) {
                return hand[0];
            } else return hand[1];
        };

        while (
            compareDealerHand() <= finalizeScore &&
            calculateHandValue(dealer())[0] < 21
        ) {
            dealerHit();
            await delay(1000);
        }

        if (finalizeScore > compareDealerHand() || compareDealerHand() > 21)
            setResult("win");
        else setResult("lose");
        setState(0);
    };

    const dealerHit = () => {
        setDealer([...dealer(), dealCard([...dealer(), ...hand()])]);
    };

    const checkEnd = () => {
        if (calculateHandValue(hand())[0] >= 21) {
            setState(2);
            while (calculateHandValue(dealer())[0] <= 11) dealerHit();
            if (calculateHandValue(hand())[0] === 21) setResult("win");
            else setResult("lose");
            setState(0);
        }
    };

    const delay = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    const takeHigherAce = (value) => (value.length > 1 ? value[1] : value[0]);

    return (
        <div class="bg-background text-primary h-screen w-screen">
            <div class="w-full p-3 font-bold text-2xl flex">
                <h1>sbj</h1>
                <div class="grow" />
                <h1>info</h1>
            </div>
            <div class="m-4 h-2/3 flex flex-col justify-center">
                <div class="flex flex-wrap">
                    {dealer().map((card) => (
                        <Card
                            value={cardValues[card].value}
                            suite={cardValues[card].suite}
                            isLastCard={dealer().at(-1) === card}
                        />
                    ))}
                    {dealer().length === 1 ? (
                        <Card value="?" suite="" isLastCard={true} />
                    ) : null}
                    {dealer().length > 0 ? (
                        <Score
                            score={
                                state() !== 2
                                    ? calculateHandValue(dealer())
                                    : [
                                          takeHigherAce(
                                              calculateHandValue(dealer())
                                          ),
                                      ]
                            }
                        />
                    ) : null}
                </div>
                <div class="flex flex-wrap">
                    {hand().map((card) => (
                        <Card
                            value={cardValues[card].value}
                            suite={cardValues[card].suite}
                            isLastCard={
                                hand().at(-1) === card || hand().length < 3
                            }
                        />
                    ))}
                    {hand().length > 0 ? (
                        <Score
                            score={
                                state() !== 1
                                    ? [
                                          takeHigherAce(
                                              calculateHandValue(hand())
                                          ),
                                      ]
                                    : calculateHandValue(hand())
                            }
                            result={result()}
                        />
                    ) : null}
                </div>
            </div>
            <div class="m-4 flex gap-x-3">
                <Button
                    class={`${
                        state() === 0 ? "brightness-100" : "brightness-50"
                    }`}
                    onclick={handleDeal}
                >
                    deal
                </Button>
                <Button
                    class={`${
                        state() === 1 ? "brightness-100" : "brightness-50"
                    }`}
                    onclick={handleHit}
                >
                    hit
                </Button>
                <Button
                    class={`${
                        state() === 1 ? "brightness-100" : "brightness-50"
                    }`}
                    onclick={handleStand}
                >
                    stand
                </Button>
            </div>
        </div>
    );
}

export default App;
