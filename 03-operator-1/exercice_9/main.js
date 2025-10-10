// Exercice 9
// Écrivez votre code ici
let maison = 60000000;
let terrains = 40000000;
let liquidites = 20000000;

let patrimoineTotal = maison + terrains + liquidites;

let partEnfants = patrimoineTotal * 0.75;

let partAutres = patrimoineTotal * 0.25;

let partParEnfant = partEnfants / 3;

let marie = partParEnfant;

let eric = partAlain / 2;
let claire = partAlain / 2;


let partParPersonneCat2 = partAutres / 3;

let madameMukuna = partParPersonneCat2;
let joseph = partParPersonneCat2;

let sarah = partParPersonneCat2;

console.log("=== RÉPARTITION DE L’HÉRITAGE DE M. JEAN MUKUNA ===");
console.log(`Patrimoine total : ${patrimoineTotal.toLocaleString()} CDF\n`);

console.log(">> Première catégorie (75%) : Enfants");
console.log(`Paul : ${paul.toLocaleString()} CDF`);
console.log(`Marie : ${marie.toLocaleString()} CDF`);
console.log(`Éric : ${eric.toLocaleString()} CDF`);
console.log(`Claire : ${claire.toLocaleString()} CDF\n`);

console.log(">> Deuxième catégorie (25%) : Conjoint et frères");
console.log(`Madame MUKUNA : ${madameMukuna.toLocaleString()} CDF`);
console.log(`Joseph : ${joseph.toLocaleString()} CDF`);
console.log(`Sarah : ${sarah.toLocaleString()} CDF`);


module.exports= {
    sarah, joseph, madameMukuna, claire, eric, marie, paul, patrimoineTotal
}