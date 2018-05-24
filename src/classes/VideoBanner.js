import * as PIXI from 'pixi.js';
import { TweenMax, Power2 } from 'gsap';
import brin from '../images/brin_sprite.png';

export default class VideoBanner {
  constructor() {
    this.container = document.getElementById('videoBannerContainer');
    const app = new PIXI.Application({
      width: this.container.offsetWidth,
      height: this.container.offsetHeight,
      transparent: true,
    });
    this.stage = app.stage;
    app.renderer.autoResize = true;
    this.container.appendChild(app.view);

    PIXI.loader.add(brin).load(() => {
      const {
        texture,
      } = PIXI.loader.resources[brin];
      const rectangle = new PIXI.Rectangle(1082, 0, 593, 452);
      texture.frame = rectangle;
      this.brinSprite = new PIXI.Sprite(texture);
      this.brinSprite.x = (this.container.offsetWidth / 2) - (593 / 2);
      this.brinSprite.y = -40;
      this.stage.addChild(this.brinSprite);
      this.gameLoop();
    });
  }

  gameLoop() {
    TweenMax.to(this.brinSprite, 2, {
      x: '+= 20px',
      y: '+= 20px',
      ease: Power2.easeInOut,
      yoyo: true,
      repeat: -1,
    });
    // setInterval(() => {
    //   if (this.brinDisplacementUp) {
    //     this.brinSprite.y += this.brinTotalDisplacementY;
    //     this.brinSprite.x -= this.brinTotalDisplacementX;
    //     this.brinDisplacementUp = false;
    //   } else {
    //     this.brinSprite.y -= this.brinTotalDisplacementY;
    //     this.brinSprite.x += this.brinTotalDisplacementX;
    //     this.brinDisplacementUp = true;
    //   }
    // }, 750);
  }
}
