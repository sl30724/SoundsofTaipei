import './style.css'
import { changeImage } from "./header-logo"

document.querySelector<HTMLDivElement>('.intro')!.innerHTML = `
  <div>
  <img id="header-logo" src = "" alt="scooter" />
    <h1><span lang="zh-Hant">你好，歡迎光臨</span></h1>
    <p class="intro-content">
    This is an audio/visual Tour exploring the sounds of Taipei City’s streets.
    To begin, please make sure your sound is on and connect headphones.
    </p>
    <p class="caption">
    Inspired by <a href="https://www.pudding.cool">Pudding.cool</a><br>
    Illustrations by <a href="https://www.facebook.com/TomParkerIllustration">Tom Parker</a><br>
    Design &  Coding by <a href="https://www.linkedin.com/in/meihsuan-lee/">Sandy Lee</a>
    </p>
    <div class="card">
      <button class="primary" id= "start-button" type="button">Start the Tour</button>
      <button class="secondary"id= "sound-button" type="button"><i class="fa-solid fa-volume-xmark"></i>  mute the audio</button>
      <p class="warning caption"> Sound is recommended! </p>
    </div>
  </div>
`
document.querySelector<HTMLDivElement>(".start")!.innerHTML = `
  <h1 class="content">The Sounds of Taipei</h1>
  <p class="content">Taipei is a vibrant city with colors, smells, and sounds.
  These are the sounds that you might hear on the streets of Taipei as a tourist. </p>
`

// apparently with querySelector you can use the following syntax for dom
changeImage(document.querySelector<HTMLImageElement>("#header-logo")!);

