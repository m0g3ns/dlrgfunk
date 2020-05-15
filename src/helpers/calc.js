const operations = ["+", "-", "*"];
const clothing = [
    "e Hose",
    "e Jacke",
    "e Mütze",
    " T-Shirt",
    " Paar Handschuhe",
];

export function randomTerm() {
    const firstPart = Math.round(Math.random() * 100);
    const secondPart = Math.round(Math.random() * 100);
    const operator =
        operations[Math.round(Math.random() * (operations.length - 1))];

    return firstPart + " " + operator + " " + secondPart;
}

export function randomClothing() {
    return clothing[Math.round(Math.random() * (clothing.length - 1))];
}

export function age(birthday) {
    const ageDifMs = Date.now() - new Date(birthday).getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
