import { createSignal, onMount } from "solid-js";
import { identifyColor } from "../utility/identifyColor";
import Suite from "./Suite";

export default function Card(props) {
    const [hasMount, setHasMount] = createSignal(true);

    onMount(async () => {
        console.log(props.isLastCard);
        if (!props.isLastCard) return;
        setHasMount(false);

        setTimeout(() => {
            setHasMount(true);
        }, 10);
    });

    return (
        <div
            class={`h-16 w-12
        ${
            identifyColor(props.suite) === "red"
                ? "bg-red"
                : identifyColor(props.suite) === "black"
                ? "bg-primary"
                : "bg-yellow"
        } 
        text-background font-bold 
        flex flex-col items-center justify-center 
        rounded-lg m-1
        ${hasMount() ? "translate-y-0" : "translate-y-[-20rem]"}
        transition-transform duration-500`}
        >
            <h1 class="text-2xl">{props.value}</h1>
            <Suite suite={props.suite} />
        </div>
    );
}
