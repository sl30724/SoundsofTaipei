// scroll to the next section when the start button is pressed
import { gsap } from "gsap"
import { ScrollToPlugin, ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);