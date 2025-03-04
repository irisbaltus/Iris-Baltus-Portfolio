console.log("✅ script.js is correct geladen!");

let currentElement = 0;
let section = document.querySelectorAll('section')
let heightSec = 0; 
let portfolio = document.querySelector('.portfolio');

function scrollToNext(){
    if(portfolio != null){ //waves not equal to null 
    section.forEach(sec=>{ //calls a function for each element in an array.
        console.log(sec.offsetHeight); //is a measurement in pixels of the element's CSS height
    })
    console.log("scrollToNext");
    console.log(window.outerHeight); //the size of the full height
    console.log(currentElement); // the page you are at the moment

    if(currentElement == 0){
        console.log('goes to section 2');
        heightSec = section[0].offsetHeight;
        window.scroll({ //elementen in een object
            top: heightSec,
            left: 0,
            behavior: "smooth"
        });
        currentElement++; // adding an element to your currentElement
    }
    else if(currentElement == 1){
        console.log ('goes to section 3');
        heightSec += section[1].offsetHeight;
        window.scroll({
            top: heightSec,
            left: 0,
            behavior: "smooth"
        });
        currentElement++;
    }

    else if(currentElement == 2){
        console.log ('goes to section 4');
        heightSec += section[2].offsetHeight;
        window.scroll({
            top: heightSec,
            left: 0,
            behavior: "smooth"
        });
        currentElement++;
    }

    else if(currentElement == 3){
        console.log('goes to section 5');
        heightSec += section[0].offsetHeight;
        window.scroll({
            top: heightSec,
            left: 0,
            behavior: "smooth"
        });
        currentElement++;
    }

    else if(currentElement == 4){
        console.log ('goes to section 6');
        heightSec += section[2].offsetHeight;
        window.scroll({
            top: heightSec,
            left: 0,
            behavior: "smooth"
        });
        currentElement++;
    }

    else if(currentElement == 5){
        console.log ('goes to section 7');
        heightSec += section[2].offsetHeight;
        window.scroll({
            top: heightSec,
            left: 0,
            behavior: "smooth"
        });
        currentElement++;
    }

    else if(currentElement == 6){
        console.log ('goes to section 8');
        heightSec += section[2].offsetHeight;
        window.scroll({
            top: heightSec,
            left: 0,
            behavior: "smooth"
        });
        currentElement++;
    }
    else if(currentElement == 7){
        console.log ('goes to section 9');
        heightSec += section[2].offsetHeight;
        window.scroll({
            top: heightSec,
            left: 0,
            behavior: "smooth"
        });
        currentElement++;
    }

    else if(currentElement == 8){
        console.log ('goes to section 10');
        heightSec += section[2].offsetHeight;
        window.scroll({
            top: heightSec,
            left: 0,
            behavior: "smooth"
        });
        currentElement++;
    }

    else if(currentElement == 9){
        console.log ('goes to section 10');
        heightSec += section[2].offsetHeight;
        window.scroll({
            top: heightSec,
            left: 0,
            behavior: "smooth"
        });
        currentElement++;
    }
    else if(currentElement == 10){
        console.log ('goes to section 11');
        heightSec += section[2].offsetHeight;
        window.scroll({
            top: heightSec,
            left: 0,
            behavior: "smooth"
        });
        currentElement++;
    }
    else if(currentElement == 11){
        console.log ('goes to section 12');
        heightSec += section[2].offsetHeight;
        window.scroll({
            top: heightSec,
            left: 0,
            behavior: "smooth"
        });
        currentElement++;
    }
    else if(currentElement == 12){
        console.log ('goes to section 13');
        heightSec += section[2].offsetHeight;
        window.scroll({
            top: heightSec,
            left: 0,
            behavior: "smooth"
        });
        currentElement++;
    }
  


}}
document.addEventListener('click', scrollToNext);

// starten van melkweg animatie zodra die in beeld is

document.addEventListener("DOMContentLoaded", function () {
    // Zoek het element met ID 'animatieMelkweg'
    const animatie = document.getElementById("animatieMelkweg");

    // Controleer of het element bestaat
    if (!animatie) {
        console.error("Animatie-element niet gevonden!");
        return;
    }

    // Maak de Intersection Observer aan
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log("Animatie gestart");
                    animatie.classList.add("active"); // Start animatie

                    // **(Optioneel)** Stop observer als animatie maar één keer moet starten
                    observer.unobserve(animatie);
                }
            });
        },
        { threshold: 0.5 } // Start animatie als 50% van het element in beeld is
    );

    // Begin met observeren
    observer.observe(animatie);
});

// window.onload = function () {
//     const animatie = document.getElementById("animatieMelkweg");

//     if (!animatie) {
//         console.error("Animatie-element niet gevonden!");
//         return;
//     }

//     const observer = new IntersectionObserver(
//         (entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     console.log("animatie gestart")
//                     animatie.classList.add("active"); // Voeg de class toe om de animatie te starten
//                 } else {
//                     console.log("animatie uit beeld")
//                     animatie.classList.remove("active"); // Verwijder class als het uit beeld gaat
//                 }
//             });
//         },
//         { threshold: 0.7 } // Start animatie als 70% van de sectie in beeld is
//     );

//     observer.observe(animatie);
// };


document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("melkwegVideo");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                console.log("intersection observer check")
                if (entry.isIntersecting) {
                    video.play(); // Start de video als deze in beeld komt
                } else {
                    video.pause(); // Pauzeer de video als deze uit beeld gaat
                }
            });
        },
        { threshold: 0.5 } // 50% van de video moet zichtbaar zijn om af te spelen
    );

    observer.observe(video);
});

window.onload = function () {
    const video = document.getElementById("melkwegVideo");
    const playButton = document.getElementById("playButton"); // Knop referentie

    if (!video || !playButton) {
        console.error("Video-element niet gevonden!");
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    video.play().catch(error => console.log("Autoplay geblokkeerd:", error));
                }
            });
        },
        { threshold: 0.5 }
    );

    observer.observe(video);

    // gaat terug naar beginframe

    video.addEventListener("ended", function () {
        video.currentTime = 0;
        video.pause();
        playButton.style.display = "block"; // Laat knop zien
        playButton.style.visibility = "visible"; 
        playButton.style.opacity = "1"; 
    });

    playButton.addEventListener("click", function () {
        video.play();
        playButton.style.display = "none"; // Verberg knop als video speelt
    });
};



document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("FashionFeminismVideo");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    video.play(); // Start de video als deze in beeld komt
                } else {
                    video.pause(); // Pauzeer de video als deze uit beeld gaat
                }
            });
        },
        { threshold: 0.5 } // 50% van de video moet zichtbaar zijn om af te spelen
    );
    console.log('animatie speelt af');

    observer.observe(video);
});

window.onload = function () {
    const video = document.getElementById("FashionFeminismVideo");
    const playButton = document.getElementById("playButton"); // Knop referentie

    if (!video || !playButton) {
        console.error("Video-element niet gevonden!");
        return;
    }}

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    video.play().catch(error => console.log("Autoplay geblokkeerd:", error));
                }
            });
        },
        { threshold: 0.5 }
    );

    observer.observe(video);

    video.addEventListener("ended", function () {
        video.currentTime = 0;
        video.pause();
        playButton.style.display = "block"; // Laat knop zien
        playButton.style.visibility = "visible"; 
        playButton.style.opacity = "1"; 
    });

    playButton.addEventListener("click", function () {
        video.play();
        playButton.style.display = "none"; // Verberg knop als video speelt
    });

   
