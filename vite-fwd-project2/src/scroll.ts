// scroll to the next section and play music when the start button is pressed
import { gsap } from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { Howl, Howler } from "howler";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const pages = Array.from(document.querySelectorAll<HTMLElement>(".page"));
const intro = document.querySelector<HTMLElement>(".tour")!;
const startButton = document.getElementById("start-button") as HTMLButtonElement;
const restartButton = document.getElementById("restart-button") as HTMLButtonElement;
const soundButton = document.getElementById("sound-button") as HTMLButtonElement;
const warning = document.querySelector<HTMLElement>(".warning")!;
const background = document.querySelector<HTMLElement>(".background")!;
let muteBool: boolean = false;
// Howler setup
Howler.volume(0.8);

let mySrc: Array<string> = ["/audios/238kb-edited-plane-landing-china-.mp3", "/audios/750kb-edited-ximending-walking.mp3", "/audios/356kb-edited-motorcycle-waterfall.mp3", "/audios/519kb-edited-breakfast.mp3", "/audios/1.7mb-edited-mrt.mp3", "/audios/553kb-edited-hiking.mp3", "/audios/430kb-edited-garbage-truck.mp3", "/audios/680kb-edited-food-court.mp3", "/audios/352kb-edited-longshan-temple.mp3", "/audios/815kb-edited-taiwanese-opera.mp3", "audios/426kb-edited-night-market.mp3"];

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

// scroll with background pinned


// DOM & GSAP & Howl
startButton.addEventListener("click", () => {
    pages.forEach(page => {
    if (page.style.display !== "flex") {
        page.style.display = "flex";
    };
    });
    gsap.to(window, { duration: 1, scrollTo: { y: ".tour" }, immediateRender: false });
    ScrollTrigger.create({
        trigger: "section.tour",
        pin: ".background",
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".content-block",
        immediateRender: false,
        scrub: 0.5,
        // end: () => "bottom top-=" + window.innerHeight/2,
    });
    sounds[0].play();
});

restartButton.addEventListener("click", () => {
    gsap.to(window, { duration: 1, scrollTo: { y: ".tour" }, immediateRender: false });
});

soundButton.addEventListener("click", () => {
    checkMute();
    Howler.mute(muteBool);
    console.log(muteBool);
});

//play sounds when an element is in viewport
let contents: Array<string> = ["start", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "nineth", "tenth"];

for (let i = 0; i < contents.length; i++) {
    ScrollTrigger.create({
        trigger: `#${contents[i]}`,
        start: "top center",
        end: "bottom top",
        markers: true,
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

// Set the name of the hidden property and the change event for visibility
let hidden: string;
let visibilityChange;
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
};

// If the page is hidden, stop the audio;
function handleVisibilityChange() {
  if (document[hidden]) {
    Howler.stop();
  } 
};

// Warn if the browser doesn't support addEventListener or the Page Visibility API
if (typeof document.addEventListener === "undefined" || hidden === undefined) {
  console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
} else {
  // Handle page visibility change
  document.addEventListener(visibilityChange, handleVisibilityChange, false);
};