import './style.css'
import { changeImage } from "./header-logo"

document.querySelector<HTMLDivElement>('.intro')!.innerHTML = `
  <div class="intro-block">
  <img id="header-logo" src = "" alt="scooter" />
    <h1><span lang="zh-Hant">你好，歡迎光臨</span></h1>
    <p class="intro-content">
    This is an audio/visual Tour exploring the sounds of Taipei City’s streets.
    To begin, please make sure your sound is on and connect headphones.
    </p>
    <p class="caption">
    Inspired by <a target="_blank" href="https://www.pudding.cool">Pudding.cool</a><br>
    Illustrations by <a target="_blank" href="https://www.facebook.com/TomParkerIllustration">Tom Parker</a><br>
    Design &  Coding by <a target="_blank" href="https://www.linkedin.com/in/meihsuan-lee/">Sandy Lee</a>
    </p>
    <div class="buttons">
      <button class="primary" id= "start-button" type="button">Start the Tour</button>
      <button class="secondary"id= "sound-button" type="button"><i class="fa-solid fa-volume-xmark"></i>  mute the audio</button>
      <p class="warning caption"> Sound is recommended! </p>
    </div>
  </div>
`
document.querySelector<HTMLDivElement>(".tour")!.innerHTML = `
<div class="background">
</div>
<div class="content-block">
  <div class="content" id="start">
    <h1 class="copy">The Sounds of Taipei</h1>
    <p class="copy">Taipei is a vibrant city with colors, smells, and sounds.
    These are the sounds that you might hear on the streets of Taipei as a tourist.</p>
  </div> 
  <div class="content" id="first">
    <p class="copy">Welcome to Taipei,  home to an estimated population of 2.7 million people with an urban population of 7.4 million.<br>
    <br>
    Known for its street food, friendly locals, and open-mindedness,
    Taipei is always ready to share its beauty with travellers.</p>
  </div> 
  <div class="content" id="second">
    <div class="copy">
      <div class="gallery">
      <img class="content-image scooter" id="scooter-1" src="images/rain-scooter.png" alt="rain scooter">
      <img class="content-image scooter" src="images/packages-scooter.png" alt="pacakges scooter">
      <img class="content-image scooter" src="images/sleep-scooter.png" alt="sleep scooter">
      <img class="content-image scooter" src="images/pig-scooter.png" alt="pig scooter">
      <img class="content-image scooter" src="images/vendor-scooter.png" alt="vendor scooter">
      </div>
    <p>In the morning, you might be waken up by the roaring sounds of scooters.<br>
    <br>
    Because of the well-developed public transportation system, owning a car is unnecessary for many. Nevertheless, having a small and convenient scooter is popular.<br>
    <br>
    According to official statistics, there are close to a million motorcycles/scooters in Taipei City alone.</p>
    </div> 
   </div> 
  <div class="content" id="third">
    <div class="copy">
      <div class="gallery">
      <img class="content-image breakfast" id="breakfast-1" src="/images/scallion-pancake.png" alt="scallion pancake">
      <img class="content-image breakfast" src="images/fried-bread.png" alt="fried bread">
      <img class="content-image breakfast" src="images/pepper-bun.png" alt="pepper bun">
      </div>
      <p>Before we start exploring Taipei, we need to take care of our stomach.<br>
      <br>
      In Taiwan, breakfast is believed to be the most important meal of the day. With the fast-paced lifestyle of Taipei, people usually don’t have time to make breakfast at home, but you can always find a <span lang="zh-Hant">早餐店</span> (breakfast shop) around every corner.<br>
      </p>
    </div>
  </div>
  <div class="content" id="fourth">
    <img class="map-closeup" src="/images/mrt-station.png" alt="MRT station">
    <div class="copy">
      <p><span lang="zh-Hant">捷運</span> (MRT, Taipei Mass Rapid Transit) is the most used public transportation system to get around Taipei with 131 stations and over two million trips made daily.<br>
      <br>
      You can hear the three most commonly-used languages in Taiwan from the announcements on MRT:  <span lang="zh-Hant">台語</span> (Taiwanese Hokkien), <span lang="zh-Hant">客家話</span> (Hakka), and <span lang="zh-Hant">中文/台灣華語</span> (Taiwanese Mandarin).<br>
      <br>
      Let’s take the MRT to get to our first destination!</p>
    </div>
  </div>
  <div class="content" id="fifth">
    <img class="map-closeup" src="/images/xiang-shan.png" alt="Xiang Shan">
    <div class="copy">
      <p>Taipei City is located in Taipei Basin surrounded by mountains.<br>
      It’s needless to say hiking in these lush subtropical forrests in nearby mountains and enjoying the breathtaking view of Taipei is one of the many things people enjoy doing.</p>
    </div>
  </div>
  <div class="content" id="sixth">
    <div class="copy">
      <p>While strolling through Taipei,<br>
      you might hear the singing of <span lang="zh-Hant">垃圾車</span>(garbage truck).<br>
      <br>
      The residents bring out the trash when they hear the familiar Beethoven's “Für Elise,” being played by the drivers of garbage trucks as they drive down the street. This is often a chance for neighbors to mingle, keeping the streets bustling with social interactions.</p>
    </div>
    <img class="map-closeup" src="/images/garbage-truck.png" alt="garbage truck">
  </div>
  <div class="content" id="seventh">
    <div class="copy">
      <div class="gallery">
      <img class="content-image" src="/images/beef-noodle-soup.png" alt="beef noodle soup">
      <img class="content-image" src="images/soup-dumpling.png" alt="soup dumpling">
      <img class="content-image" src="images/minced-pork-rice.png" alt="minced pork rice">
      <img class="content-image" src="images/hot-pot.png" alt="hot pot">
      </div>
      <p>After hiking, head to the nearby food court located beneath Taipei 101 for lunch. Highly influenced by Chinese and Japanese cuisine, Taiwanese food is worth being obsessed over for a reason.<br>
      <br>
      From casual street food to Michelin-starred restaurants, Taipei has something for everyone. </p>
    </div>
    <img class="map-closeup" src="/images/taipei-101.png" alt="garbage truck">
  </div>
 </div>
`

// apparently with querySelector you can use the following syntax for dom
changeImage(document.querySelector<HTMLImageElement>("#header-logo")!);

