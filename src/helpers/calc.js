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

const messages = [
    "Restdruck auf Sauerstoffflasche beträgt 20 bar",
    "2 WG e-klar",
    "Auf unserem Turmrucksack fehlen 2 Kühlpacks und ein Verbandpäckchen groß",
    "Wir haben eine Wassertemperatur von 18°C gemessen",
    "Vor Turm 4 befindet sich ein Motorboot innerhalb der Badezone",
    'Ein Badegast meldet eine gestürzte Person auf der Promenade in Höhe der Bar "Wir haben nichts"',
];

export function getMessage() {
    return messages[Math.round(Math.random() * (messages.length - 1))];
}
