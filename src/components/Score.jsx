export default function Score(props) {
    return (
        <div class="text-background bg-primary/50 rounded-lg min-w-10 h-8 font-bold flex items-center justify-center m-1 p-2">
            <h1>{props.score}</h1>
        </div>
    );
}
