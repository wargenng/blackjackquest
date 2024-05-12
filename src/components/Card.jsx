import { identifyColor } from "../utility/identifyColor";

export default function Card(props) {
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
        rounded-lg m-1`}
        >
            <h1 class="text-2xl">{props.value}</h1>
            {props.suite ? (
                <img src={`./src/assets/${props.suite}.svg`} />
            ) : null}
        </div>
    );
}
