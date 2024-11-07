/*Schrijf een functie begroet(naam) die een naam als parameter neemt en “Hallo,
(naam)!” retourneert. - Console Test: console.log(begroet("Jan")); // Verwachte Output:
"Hallo, Jan!"*/

function begroet(naam) {
    return "Hallo " + naam + "!";
}
console.log(begroet("Jan"))

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("runButton").addEventListener("click", function () {
        const outputDiv = document.getElementById("output");
        outputDiv.textContent = "Output: " + begroet("Jan"); // Output "8" in het vak
    });
});














