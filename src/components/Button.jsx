export default function Button(props) {
    console.log(props.class);
    return (
        <button
            class={`${props.class} font-bold p-2 bg-primary text-background rounded-lg w-full h-16`}
            onclick={props.onclick}
        >
            {props.children}
        </button>
    );
}
