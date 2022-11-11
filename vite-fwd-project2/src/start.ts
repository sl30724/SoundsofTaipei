// scroll to the next section when the start button is pressed
import { gsap } from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { Howl, Howler } from "howler";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const pages = Array.from(document.querySelectorAll<HTMLElement>(".page"))
const startButton = document.getElementById("start-button") as HTMLButtonElement;
const soundButton = document.getElementById("sound-button") as HTMLButtonElement;
const unmuteButton = document.getElementById("unmute-button") as HTMLButtonElement;
const warning = document.querySelector<HTMLElement>(".warning")!;
let muteBool: boolean = false;
// Howler setup
Howler.volume(0.8);

const sound1 = new Howl({
    src: ["/audios/Audios/1.7mb-edited-mrt.mp3"],
    autoplay: false,
    // onload: function () {
    //     console.log("Sound is loading");
    // },
    // onplay: function () {
    //     console.log("Sound is playing");
    // },
});

// DOM & GSAP & Howl
startButton.addEventListener("click", () => {
    console.log("button pressed");
    pages.forEach(page => {
        if (page.style.display !== "flex") {
            page.style.display = "flex";
        }
    });
    gsap.to(window, { duration: 1, scrollTo: { y: ".start" } });
    sound1.play();
});

soundButton.addEventListener("click", ()=> {
    checkMute();
    Howler.mute(muteBool);
    console.log(muteBool);
});

function checkMute() {
    if (muteBool == false) {
        muteBool = true;
        soundButton.innerHTML = "<i class='fa-solid fa-volume-high'></i>  unmute (turn on sound)";
        soundButton.style.color = "red";
        warning.style.display = "block";
    } else {
        muteBool = false;
        soundButton.innerHTML = "<i class='fa-solid fa-volume-xmark'></i>  mute the audio";
        soundButton.style.color = "black";
        warning.style.display = "none";
    }
}