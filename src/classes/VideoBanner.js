import * as PIXI from 'pixi.js';
import { TweenMax, Power2, SlowMo } from 'gsap';
import brin from '../images/brin_sprite.png';
import Utility from './Utility';
import cloud1 from '../images/cloud1.png';
import cloud2 from '../images/cloud2.png';
import cloud3 from '../images/cloud3.png';
import leaf1 from '../images/leaf1.png';
import snowflake1 from '../images/snowflake1.png';
import moon from '../images/Moon.png';

export default class VideoBanner {
  constructor() {
    this.container = document.getElementById('videoBannerContainer');
    this.app = new PIXI.Application({
      width: this.container.offsetWidth,
      height: this.container.offsetHeight,
      transparent: true,
      antialias: true,
    });
    this.stage = this.app.stage;
    this.app.renderer.autoResize = true;
    this.renderer = this.app.renderer;
    this.container.appendChild(this.app.view);
    this.clouds = [];
    this.debris = [];
    this.addMoon();
    this.addDebris(leaf1, 0.01, 5);
    this.addDebris(snowflake1, 0.1, 5);
    this.addBrin();
    this.addCloud(cloud1);
    this.addCloud(cloud2);
    this.addCloud(cloud3);
    this.animate();
  }

  addMoon() {
    this.moonSprite = PIXI.Sprite.fromImage(moon);
    this.moonSprite.scale.set(0.125, 0.125);
    this.moonSprite.y = this.container.offsetHeight / 2;
    this.stage.addChild(this.moonSprite);
  }

  rePositionMoon() {
    this.moonSprite.y = this.container.offsetHeight / 2;
    this.moonSprite.x = -this.moonSprite.width;
  }

  addDebris(image, scale, n = 1) {
    for (let i = 0; i < n; i += 1) {
      const sprite = PIXI.Sprite.fromImage(image);
      sprite.scale.set(scale, scale);
      sprite.rotation = Utility.getRandomIntFromRange(0, 360);
      this.positionDebris(sprite);
      this.debris.push(sprite);
      this.stage.addChild(sprite);
    }
  }

  positionDebris(sprite) {
    sprite.xySpeed = Utility.getRandomIntFromRange(3, 7);
    sprite.rotSpeed = Utility.randomNumFromRange(1, 3);
    TweenMax.set(sprite, {
      x: Utility.getRandomIntFromRange(0, window.innerWidth),
      y: this.container.offsetHeight + 100,
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

  addBrin() {
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

  moveBrin() {
    TweenMax.to(this.brinSprite, 2, {
      x: '+= 20px',
      y: '+= 20px',
      ease: Power2.easeInOut,
      yoyo: true,
      repeat: -1,
    });
  }

  animate() {
    requestAnimationFrame(() => {
      this.animate();
    });
    this.updateDebris();
    this.updateMoon();
  }

  updateMoon() {
    this.moonSprite.x += 0.25 * 20;
    this.moonSprite.y -= 0.03 * 20;
    if (this.outsideContainer(this.moonSprite)) {
      this.rePositionMoon(this.moonSprite);
    }
  }

  updateDebris() {
    for (let i = 0; i < this.debris.length; i += 1) {
      this.debris[i].x += 1 * this.debris[i].xySpeed;
      this.debris[i].y -= 1 * this.debris[i].xySpeed;
      this.debris[i].rotation += (0.01 * this.debris[i].rotSpeed);
      if (this.outsideContainer(this.debris[i])) {
        this.positionDebris(this.debris[i]);
      }
    }
  }

  outsideContainer(sprite) {
    if (sprite.y < -sprite.height
        || sprite.y > (this.container.offsetHeight + sprite.height)
        || sprite.x < -sprite.width
        || sprite.x > (this.container.width + sprite.width)) {
      return true;
    }
    return false;
  }
}
