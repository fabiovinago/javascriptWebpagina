/*Schrijf een functie vervangKlinkers(tekst) die alle klinkers in een string
vervangt door het teken *. – Console Test: console.log(vervangKlinkers("Hallo Wereld")); //
Verwachte Output: "H*ll* W*r*ld"*/

function vervangKlinkers(tekst) {
    return tekst.replace(/[aeiouAEIOU]/g, '*');
}
console.log(vervangKlinkers("Hallo Wereld"));


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("runButton").addEventListener("click", function () {
        const outputDiv = document.getElementById("output");
        outputDiv.textContent = "Output: " + keerOm ("JavaScript");
    });
});
