import './style.css'
import { setupCounter } from './counter'
import { changeImage } from "./scroll"

document.querySelector<HTMLDivElement>('#intro')!.innerHTML = `
  <div>
  <img id="header-logo" src = "" alt="scooter" />
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
    This is an audio/visual Tour exploring the sounds of Taipei City’s streets.
    To begin, please make sure your sound is on and connect headphones.
    </p>
  </div>
`
document.querySelector<HTMLDivElement>("#main")!.innerHTML = `
 <div>
  <p> test to see </p>
 </div>
`
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

let headerLogo = document.getElementById("header-logo") as HTMLImageElement;
changeImage(headerLogo);

