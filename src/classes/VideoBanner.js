import * as PIXI from 'pixi.js';
import { TweenMax, Power2, SlowMo } from 'gsap';
import brin from '../images/brin_sprite.png';
import Utility from './Utility';
import cloud1 from '../images/cloud1.png';
import cloud2 from '../images/cloud2.png';
import cloud3 from '../images/cloud3.png';

export default class VideoBanner {
  constructor() {
    this.container = document.getElementById('videoBannerContainer');
    this.app = new PIXI.Application({
      width: this.container.offsetWidth,
      height: this.container.offsetHeight,
      transparent: true,
    });
    this.stage = this.app.stage;
    this.app.renderer.autoResize = true;
    this.renderer = this.app.renderer;
    this.container.appendChild(this.app.view);
    this.clouds = [];
    this.addCloud(cloud1);
    this.addCloud(cloud2);
    this.addCloud(cloud3);
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
      this.moveBrin();
    });
  }

  addCloud(cloud) {
    const sprite = PIXI.Sprite.fromImage(cloud);
    this.stage.addChild(sprite);
    this.clouds.push(sprite);
    sprite.scale.set(0.5, 0.5);
    TweenMax.fromTo(sprite, Utility.getRandomIntFromRange(0, 5) + 25, {
      x: -Utility.getRandomIntFromRange(700, 1200),
      y: Utility.getRandomIntFromRange(-340, -110),
      opacity: 0,
    }, {
      ease: SlowMo.ease.config(Utility.randomNumFromRange(0.1, 0.4), Utility.randomNumFromRange(0.1, 0.4), false),
      x: 1000,
      y: -Utility.getRandomIntFromRange(400, 550),
      repeat: -1,
      opacity: 1,
    });
  }

  moveBrin() {
    TweenMax.to(this.brinSprite, 2, {
      x: '+= 20px',
      y: '+= 20px',
      ease: Power2.easeInOut,
      yoyo: true,
      repeat: -1,
    });
  }
}
