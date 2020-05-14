const operations = ["+", "-", "*"];

export function randomTerm() {
    const firstPart = Math.round(Math.random() * 100);
    const secondPart = Math.round(Math.random() * 100);
    const operator =
        operations[Math.round(Math.random() * (operations.length - 1))];

    return firstPart + " " + operator + " " + secondPart;
}
