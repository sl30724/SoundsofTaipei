// scroll to the next section and play music when the start button is pressed
import { gsap } from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { Howl, Howler } from "howler";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const pages = Array.from(document.querySelectorAll<HTMLElement>(".page"));
const startButton = document.getElementById("start-button") as HTMLButtonElement;
const restartButton = document.getElementById("restart-button") as HTMLButtonElement;
const soundButton = document.getElementById("sound-button") as HTMLButtonElement;
const warning = document.querySelector<HTMLElement>(".warning")!;
let muteBool: boolean = false;

// Howler setup
Howler.volume(0.8);

let mySrc: Array<string> = ["/audios/edited-plane-landing.mp3", "/audios/edited-ximending-walking.mp3", "/audios/356kb-edited-motorcycle-waterfall.mp3", "/audios/edited-breakfast.mp3", "/audios/edited-mrt.mp3", "/audios/553kb-edited-hiking.mp3", "/audios/430kb-edited-garbage-truck.mp3", "/audios/680kb-edited-food-court.mp3", "/audios/352kb-edited-longshan-temple.mp3", "/audios/815kb-edited-taiwanese-opera.mp3", "audios/426kb-edited-night-market.mp3"];

let sounds = new Array(mySrc.length);
mySrc.forEach((src, i) => {
    sounds[i] = new Howl({
        src: [src],
        autoplay: false,
        loop: true,
        onplay: function () {
            console.log(`src ${i} is playing`);
            sounds[i].fade(0, 0.8, 2000);
        },
        onstop: function () {
            // sounds[i].fade(0.8, 0, 3000);
            console.log(`src ${i} stopped playing`);
        },
    });
});


// DOM & GSAP & Howl
startButton.addEventListener("click", () => {
    pages.forEach(page => {
    if (page.style.display !== "flex") {
        page.style.display = "flex";
    };
    });
    // scroll to tour when the start button is clicked
    gsap.to(window, { duration: 1, scrollTo: { y: ".tour" }, immediateRender: false });
    // scroll with background pinned
    ScrollTrigger.create({
        trigger: "section.tour",
        pin: ".background",
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".content-block",
        immediateRender: false,
        scrub: 0.5,
    });
    sounds[0].play();
});
// scroll to tour when the restart button is clicked
restartButton.addEventListener("click", () => {
    gsap.to(window, { duration: 1, scrollTo: { y: ".tour" }, immediateRender: false });
});
// check if the sound button is clicked
soundButton.addEventListener("click", () => {
    checkMute();
    Howler.mute(muteBool);
    console.log(muteBool);
});

// play sounds when an element is in viewport
let contents: Array<string> = ["start", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "nineth", "tenth"];

for (let i = 0; i < contents.length; i++) {
    ScrollTrigger.create({
        trigger: `#${contents[i]}`,
        start: "top center",
        end: "bottom top",
        immediateRender: true,
        onToggle: self => {
            console.log(`${contents[i]}, isActive:`, self.isActive);
            if (self.isActive === true) {
                if (i === 0) {
                    gsap.to(".background", { opacity: 1 });
                    if (sounds[i].playing() === true) {
                        sounds[i + 1].stop();
                    } else if (sounds[i].playing() === false) {
                        Howler.stop();
                        sounds[i].play();
                    }
                }
                else if (i >= 1) {
                    gsap.to(".background", { opacity: 0.7 });
                    Howler.stop();
                    sounds[i].play();
                }
            }
            else if (self.isActive === false) {
                sounds[i].fade(0.8, 0, 1000);
                if (i === 0) {
                    sounds[i].stop();
                };
            }
        }
    });
};
// mute and unmute if sound button is clicked
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
};

// stop playing if tab is not focused
function checkTabFocused() {
    if (document.visibilityState === 'visible') {
      console.log('✅ browser tab has focus');
    } else {
      console.log('⛔️ browser tab does NOT have focus');
      Howler.stop();
    }
  };
  
  // Add event listener
document.addEventListener('visibilitychange', checkTabFocused);