export function dealCard(currentCards) {
    const allCards = Array.from({ length: 52 }, (_, i) => i + 1);

    const availableNumbers = allCards.filter(
        (card) => !currentCards.includes(card)
    );

    const randomIndex = Math.floor(Math.random() * availableNumbers.length);

    return availableNumbers[randomIndex];
}
