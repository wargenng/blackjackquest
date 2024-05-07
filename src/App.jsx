import { createSignal } from "solid-js";
import Button from "./components/Button";
import Card from "./components/Card";
import Score from "./components/Score";
import cardValues from "../src/utility/cardValues.json";

function App() {
    const [hand, setHand] = createSignal([1, 5, 7]);
    const [dealer, setDealer] = createSignal([22, 23, 2]);
    console.log(cardValues);

    return (
        <div class="bg-background text-primary h-screen w-screen">
            <div class="w-full p-3 font-bold text-2xl flex">
                <h1>sbj</h1>
                <div class="grow" />
                <h1>info</h1>
            </div>
            <div class="m-4 h-2/5 flex flex-col justify-center">
                <div class="flex flex-wrap">
                    {hand().map((card) => (
                        <Card
                            value={cardValues[card].value}
                            suite={cardValues[card].suite}
                        />
                    ))}
                    <Score score="20" />
                </div>
                <div class="flex flex-wrap">
                    {dealer().map((card) => (
                        <Card
                            value={cardValues[card].value}
                            suite={cardValues[card].suite}
                        />
                    ))}
                    <Score score="22" />
                </div>
            </div>
            <div class="m-4 flex flex-col gap-y-3">
                <Button>deal</Button>
                <Button>hit</Button>
                <Button>stand</Button>
            </div>
        </div>
    );
}

export default App;
