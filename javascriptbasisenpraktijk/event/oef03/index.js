/*Voeg een Click Event toe aan een Knop om een Bericht weer te geven
– Oefening: Maak een knop en voeg een click event toe die “Knop is geklikt!” in
de console logt.
– Console Test: console.log("Knop is geklikt!"); // Verwachte
Output: Knop is geklikt!*/

const knop = document.getElementById('mijnKnop');

knop.addEventListener('click', function(){
    console.log("Knop is geklikt");
})


