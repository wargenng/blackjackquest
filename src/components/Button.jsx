export default function Button(props) {
    return (
        <button
            class="font-bold p-2 bg-primary text-background rounded-lg"
            onclick={props.onclick}
        >
            {props.children}
        </button>
    );
}
