/*Schrijf een functie vierkant(getal) die een getal kwadrateert en het resultaat
retourneert. – Console Test: console.log(vierkant(4)); // Verwachte Output: 16*/

function vierkant(getal) {
    return getal * getal;
}
console.log(vierkant(4))

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("runButton").addEventListener("click", function () {
        const outputDiv = document.getElementById("output");
        outputDiv.textContent = "Output: " + vierkant(4); // Output "8" in het vak
    });
});











