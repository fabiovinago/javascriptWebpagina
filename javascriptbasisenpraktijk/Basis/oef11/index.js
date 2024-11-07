//Schrijf een functie telOp(a, b) die twee getallen optelt en de som retourneert.

function telOp(a, b) {
    return a + b;
}
console.log(telOp(5, 3));

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("runButton").addEventListener("click", function () {
        const outputDiv = document.getElementById("output");
        outputDiv.textContent = "Output: " + telOp(5, 3); // Output "8" in het vak
    });
});


