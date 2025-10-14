// Exercice 9
// Écrivez votre code ici
let maison = 60000000;
let terrains = 40000000;
let liquidites = 20000000;
let totalHeritage = 6000000 + 4000000 + 2000000;
let heritageEnfants = totalHeritage * 0.75;
let partParEnfant = heritageEnfants/ 3;
let paul = partParEnfant;
let marie = partParEnfant;
let parAlain = partParEnfant;
let eric = parAlain / 2;
let claire = parAlain/ 2;

let heritageDeuxiemeCategorie = totalHeritage * 0.25;
let partParPersonneCat2 = heritageDeuxiemeCategorie / 3;

let madameMukuna = partParPersonneCat2;
let joseph = partParPersonneCat2;
let sarah = partParPersonneCat2;

console.log("RÉPARTITION DE L’HÉRITAGE DE M. JEAN MUKUNA");
console.log(">> Première catégorie (75%) : Enfants");
console.log("Paul :", paul, "CDF");
console.log("Marie :", marie,  "CDF");
console.log("Éric :", e, "CDF");
console.log("Claire :",claire,"CDF");

console.log(">> Deuxième catégorie (25%) : Conjoint et frères");
console.log("Madame MUKUNA :",madameMukuna, "CDF");
console.log("Joseph :",joseph, "CDF");
console.log("Sarah :", sarah, "CDF");


module.exports= {
    paul, marie, eric, claire, madameMukuna, joseph, sarah 
};