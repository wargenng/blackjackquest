import Button from "./components/Button";
import Card from "./components/Card";
import Score from "./components/Score";

function App() {
    return (
        <div class="bg-background text-primary h-screen w-screen">
            <div class="w-full p-3 font-bold text-2xl flex">
                <h1>sbj</h1>
                <div class="grow" />
                <h1>info</h1>
            </div>
            <div class="m-4 h-2/5 flex flex-col justify-center">
                <div class="flex flex-wrap">
                    <Card value="A" suite="heart" />
                    <Card value="K" suite="spade" />
                    <Card value="Q" suite="diamond" />
                    <Card value="J" suite="club" />
                    <Card value="J" suite="club" />
                    <Card value="J" suite="club" />
                    <Score score="22" />
                </div>
                <div class="flex flex-wrap">
                    <Card value="A" suite="heart" />
                    <Card value="K" suite="spade" />
                    <Card value="Q" suite="diamond" />
                    <Card value="J" suite="club" />
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
