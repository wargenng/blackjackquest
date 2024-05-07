import { checkIsRed } from "../utility/checkIsRed";

export default function Card(props) {
    return (
        <div
            class={`h-16 w-12
        ${checkIsRed(props.suite) ? "bg-red" : "bg-primary"} 
        text-background font-bold 
        flex flex-col items-center justify-center 
        rounded-lg m-1`}
        >
            <h1 class="text-2xl">{props.value}</h1>
            <img src={`src/assets/${props.suite}.svg`} />
        </div>
    );
}
