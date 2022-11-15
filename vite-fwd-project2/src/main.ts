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
    <p><span lang="zh-Hant">機車 (motorcycles/scooters)</span></p>
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
      In Taiwan, breakfast is believed to be the most important meal of the day. With the fast-paced lifestyle of Taipei, people usually don’t have time to make breakfast at home, but you can always find a <span lang="zh-Hant">早餐店 (breakfast shop)</span> around every corner.<br>
      </p>
    </div>
  </div>
  <div class="content" id="fourth">
    <img class="map-closeup" src="/images/mrt-station.png" alt="MRT station">
    <div class="copy">
      <p><span lang="zh-Hant">捷運 (MRT, Taipei Mass Rapid Transit)</span> is the most used public transportation system to get around Taipei with 131 stations and over two million trips made daily.<br>
      <br>
      You can hear the three most commonly-used languages in Taiwan from the announcements on MRT:  <span lang="zh-Hant">台語 (Taiwanese Hokkien)</span>, <span lang="zh-Hant">客家話 (Hakka)</span>, and <span lang="zh-Hant">中文/台灣華語 (Taiwanese Mandarin)</span>.<br>
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
      you might hear the singing of <span lang="zh-Hant">垃圾車 (garbage truck)</span>.<br>
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
  <div class="content" id="eighth">
  <img class="map-closeup" src="/images/lungshan-temple.png" alt="Lungshan Temple">
    <div class="copy">
      <p>Beneath Taipei’s modern façade is a body of beliefs that stretch back for millennia. That’s why temples are everywhere to be seen around Taipei.<br>
      <br>
      Head over to one of the most popular temples in Taipei, <span lang="zh-Hant">龍山寺 (Lungshan Temple)</span>, and learn how religion sets the clock for living in Taiwan, regulates holidays, and often determines the rhythm for both business and family.</p>
    </div>
  </div>
  <div class="content" id="nineth">
  <img class="map-closeup" src="/images/dadaocheng.png" alt="Dadaocheng">
    <div class="copy">
      <p>Head to the nearby <span lang="zh-Hant">大稻埕 (Dadaocheng, Twatutia, Daitōtei)</span>, the oldest district in Taipei, for a glimpse at the old Taipei where most of the buildings still preserve its original looks.<br>
      <br>
      You can also watch a  <span lang="zh-Hant">歌仔戲 (Taiwanese opera, Ke-Tse opera, Hokkien opera)</span> at Dadaocheng Theater, a form of traditional drama originating in Taiwan. It is considered as the embodiment of Taiwanese history and tradition because the political identity crisis of Taiwan shaped its development.<br>
      <br>
      While its popularity among people has declined over the years, there’s a dedicating group of people striving to preserve this spectacular art form.</p>
    </div>
  </div>
  <div class="content" id="tenth">
  <img class="map-closeup" id="map-nightmarket" src="/images/background-night-market.png" alt="Night market">
    <div class="copy">
      <div class="gallery">
        <div class="image-caption">
          <img class="content-image nightmarket" src="images/stinky-tofu.png" alt="stinky tofu">
          <p class=caption><span lang="zh-Hant">臭豆腐<br>(Stinky tofu)</span></p>
        </div>
        <div class="image-caption">
          <img class="content-image nightmarket" src="images/bubble-tea.png" alt="bubble tea">
          <p class=caption><span lang="zh-Hant">珍珠奶茶<br>(Bubble tea)</span></p>
        </div>
        <div class="image-caption">
          <img class="content-image nightmarket" src="images/oyster-omlette.png" alt="oyster omlette">
          <p class=caption><span lang="zh-Hant">蚵仔煎<br>(Oyster Omlette)</span></p>
        </div>
        <div class="image-caption">
          <img class="content-image nightmarket" src="images/meatball.png" alt="meatball">
          <p class=caption><span lang="zh-Hant">肉圓<br>(Meatball)</span></p>
        </div>
        <div class="image-caption">
          <img class="content-image nightmarket" src="images/papaya-milk.png" alt="papaya milk">
          <p class=caption><span lang="zh-Hant">木瓜牛奶<br>(Papaya milk)</span></p>
        </div>
        <div class="image-caption">
          <img class="content-image nightmarket" src="images/mango-ice.png" alt="mango ice">
          <p class=caption><span lang="zh-Hant">芒果冰<br>(Mango ice)</span></p>
        </div>
        <div class="image-caption">
          <img class="content-image nightmarket" src="images/pigblood-cake.png" alt="pigblood cake">
          <p class=caption><span lang="zh-Hant">豬血糕<br>(Pigbloog cake)</span></p>
        </div>
      </div>
      <p>When the nightfall approaches, it’s time to head over the highlight of your day — <span lang="zh-Hant">夜市 (night market)</span>. All kinds of vendors would gather around urban street corners or temple plazas to sell handicrafts, games, consumer goods,  Taiwanese street food, and desserts.<br>
      </p>
    </div>
  </div>
 </div>
`
document.querySelector<HTMLDivElement>(".footer")!.innerHTML = `
<div class="intro-block">
    <h1><span lang="zh-Hant">謝謝！</span></h1>
    <p>This project wouldn’t be as cool if not for the beautiful illustrations handdrawn by Tom Parker,<br>
    as well as the multiple sound clips poduced by people who share my love for Taipei City.<br>
    See below for the the list of Youtube videos used for audio,<br>
    or see the tour again by clicking the button.
    </p>
    <button class="primary" id= "restart-button" type="button">Start Over</button>
    <p class=caption><a target="_blank" href="https://youtu.be/yIlEh7P4o04">China Airlines A350-900 landing @ Taoyuan [Shot on α6300]</a><br>
    <a target="_blank" href="https://youtu.be/j6dp21iXdhI">4K Taipei Ximending Videowalk At Night | 3D Street Binaural Sound iPhone 11</a><br>
    <a target="_blank" href="https://youtu.be/0I7H8VQ6RpA">Scooter Waterfall In Taipei</a><br>
    <a target="_blank" href="https://youtu.be/Id1KfxiKdeY">Taiwan style breakfast @ TaiChung - Taiwan Street Food</a><br>
    <a target="_blank" href="https://youtu.be/i2vK6-dteH0">Taiwan, Taipei, 2X MRT ride from Main station, to Taipei Zoo</a><br>
    <a target="_blank" href="https://on.soundcloud.com/Ly5Uk">Audio Postcard Yinhe Cave (銀河洞) Hiking Trail, New Taipei City, Xindian District, Taiwan, 17112019</a><br>
    <a target="_blank" href="https://youtu.be/DRvgmLLlhp0">Musical Trash Truck in Taiwan</a><br>
    <a target="_blank" href="https://youtu.be/0bakTGk3Arg">[4K] Walking in Taipei - Night - Taipei 101 Food Court - (Dji Osmo Pocket 2)</a><br>
    <a target="_blank" href="https://youtu.be/DRvgmLLlhp0">Longshan Temple - 龍山寺 - Taipei, Taiwan - 4K</a><br>
    <a target="_blank" href="https://youtu.be/EcGZbyVXZu0">宜蘭~蘭陽歌劇團~大稻埕戲苑~好戲演出~錯配姻緣</a><br>
    <a target="_blank" href="https://youtu.be/YIchktTfiD0">Popular Taiwanese Street and Night Market Food | Taiwanese Street Food</a><br>
    </p>
    </div>
`

// apparently with querySelector you can use the following syntax for dom
changeImage(document.querySelector<HTMLImageElement>("#header-logo")!);

