import cardValues from "./cardValues.json";

export function calculateHandValue(cardIds) {
    let total = 0;
    let hasAce = false;

    cardIds.forEach((cardId) => {
        if (cardId === 0) return;
        if (["J", "Q", "K"].includes(cardValues[cardId].value)) {
            total += 10;
        } else if (cardValues[cardId].value === "A") {
            total += 1;
            hasAce = true;
        } else {
            total += +cardValues[cardId].value;
        }
    });

    let possibleValues = [total];

    if (hasAce) {
        if (total == 11) {
            possibleValues[0] = 21;
        } else if (total < 11) {
            possibleValues.push(total + 10);
        }
    }
    return possibleValues;
}
