export function identifyColor(suite) {
    return suite === "heart" || suite === "diamond"
        ? "red"
        : suite === "spade" || suite === "club"
        ? "black"
        : "yellow";
}
