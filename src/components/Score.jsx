export default function Score(props) {
    return (
        <div class="text-background bg-primary/50 rounded-lg min-w-8 h-6 font-bold flex items-center justify-center m-1 p-2 text-sm">
            <h1>
                {props.score.length > 1 ? props.score.join("/") : props.score}
            </h1>
        </div>
    );
}
