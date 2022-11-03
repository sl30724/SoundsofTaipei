import './style.css'
import { setupCounter } from './counter'
import { changeImage } from "./header-logo"

document.querySelector<HTMLDivElement>('#intro')!.innerHTML = `
  <div>
  <img id="header-logo" src = "" alt="scooter" />
    <h1>你好，歡迎光臨</h1>
    <p class="read-the-docs">
    This is an audio/visual Tour exploring the sounds of Taipei City’s streets.
    To begin, please make sure your sound is on and connect headphones.
    </p>
    <div class="card">
      <button id="counter" type="button"></button>
      <button id= "start-button" type="button">start the tour</button>
      <button id= "sound-button" type="button">mute the audio</button>
    </div>
  </div>
`
document.querySelector<HTMLDivElement>("#start")!.innerHTML = `
 <div>
  <p> test to see </p>
 </div>
`

// apparently with querySelector you can use the following syntax for dom
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
changeImage(document.querySelector<HTMLImageElement>("#header-logo")!);

