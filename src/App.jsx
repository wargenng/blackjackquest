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

    const handleDeal = () => {
        let cardsDrawn = [];
        cardsDrawn.push(dealCard([]));
        cardsDrawn.push(dealCard(cardsDrawn));
        setHand(cardsDrawn);
        setDealer([dealCard(cardsDrawn)]);
        checkEnd();
    };

    const handleHit = () => {
        const newHand = [...hand(), dealCard([...dealer(), ...hand()])];
        setHand(newHand);
        checkEnd();
    };

    const handleStand = async () => {
        const playerScores = calculateHandValue(hand());
        const finalizeScore =
            playerScores.length > 1 ? playerScores[1] : playerScores[0];

        while (
            calculateHandValue(dealer())[0] <= finalizeScore &&
            calculateHandValue(dealer())[0] <= 21
        )
            dealerHit();
    };

    const dealerHit = () => {
        setDealer([...dealer(), dealCard([...dealer(), ...hand()])]);
    };

    const checkEnd = () => {
        if (calculateHandValue(hand())[0] >= 21) {
            while (calculateHandValue(dealer())[0] <= 11) dealerHit();
        }
    };

    return (
        <div class="bg-background text-primary h-screen w-screen">
            <div class="w-full p-3 font-bold text-2xl flex">
                <h1>sbj</h1>
                <div class="grow" />
                <h1>info</h1>
            </div>
            <div class="m-4 h-2/5 flex flex-col justify-center">
                <div class="flex flex-wrap">
                    {dealer().map((card) => (
                        <Card
                            value={cardValues[card].value}
                            suite={cardValues[card].suite}
                        />
                    ))}
                    {dealer().length === 1 ? <Card value="?" suite="" /> : null}
                    {dealer().length > 0 ? (
                        <Score score={calculateHandValue(dealer())} />
                    ) : null}
                </div>
                <div class="flex flex-wrap">
                    {hand().map((card) => (
                        <Card
                            value={cardValues[card].value}
                            suite={cardValues[card].suite}
                        />
                    ))}
                    {hand().length > 0 ? (
                        <Score score={calculateHandValue(hand())} />
                    ) : null}
                </div>
            </div>
            <div class="m-4 flex flex-col gap-y-3">
                <Button class={``} onclick={handleDeal}>
                    deal
                </Button>
                <Button class={``} onclick={handleHit}>
                    hit
                </Button>
                <Button onclick={handleStand}>stand</Button>
            </div>
        </div>
    );
}

export default App;
