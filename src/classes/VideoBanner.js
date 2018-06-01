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
    this.ratio = this.container.offsetWidth / this.container.offsetHeight;
    this.clouds = [];
    this.debris = [];
    this.origWidth = this.container.offsetWidth;
    this.addMoon();
    this.addDebris(leaf1, 0.01, 5);
    this.addDebris(snowflake1, 0.1, 5);
    this.addBrin();
    this.addCloud(cloud1);
    this.addCloud(cloud2);
    this.addCloud(cloud3);
    this.attachListeners();
    this.resize();
    this.animate();
  }

  attachListeners() {
    window.addEventListener('resize', () => {
      this.resize();
    });
  }

  resize() {
    // const w = this.container.offsetWidth;
    // const h = this.container.offsetHeight;
    // this.renderer.view.style.width = `${w}px`;
    // this.renderer.view.style.height = `${h}px`;
    // this.renderer.resize(w,h);
    // this.brinSprite.x += (this.origWidth - this.container.width);
    if (window.innerWidth / window.innerHeight >= this.ratio) {
        var w = window.innerHeight * this.ratio;
        var h = window.innerHeight;
    } else {
        var w = window.innerWidth;
        var h = window.innerWidth / this.ratio;
    }
    this.renderer.view.style.width = w + 'px';
    this.renderer.view.style.height = h + 'px';
  }

  positionBrin() {
    this.brinSprite.x = this.container.offsetWidth / 2 - 593 / 2;
    this.brinSprite.y = -40;
  }

  addMoon() {
    this.moonSprite = PIXI.Sprite.fromImage(moon);
    this.moonSprite.scale.set(0.12, 0.12);
    this.moonSprite.x = -100;
    this.moonSprite.y = this.container.offsetHeight / 2;
    this.stage.addChild(this.moonSprite);
  }

  rePositionMoon() {
    this.moonSprite.y = this.container.offsetHeight * 0.65;
    this.moonSprite.x = -this.moonSprite.width;
  }

  addDebris(image, scale, n = 1) {
    for (let i = 0; i < n; i += 1) {
      const sprite = PIXI.Sprite.fromImage(image);
      scale *= Utility.randomNumFromRange(0.7, 1);
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
      y: this.container.offsetHeight,
    });
  }

  addCloud(cloud) {
    const sprite = PIXI.Sprite.fromImage(cloud);
    this.stage.addChild(sprite);
    this.clouds.push(sprite);
    sprite.scale.set(0.5, 0.5);
    this.repositionCloud(sprite);
  }

  repositionCloud(sprite) {
    sprite.x = -(sprite.width * Utility.getRandomIntFromRange(1, 2));
    sprite.y = Utility.randomNumFromRange(
      this.container.offsetHeight * 0.2,
      this.container.offsetHeight * 0.8,
    );
  }

  updateCloud() {
    for (let i = 0; i < this.clouds.length; i += 1) {
      if (this.outsideContainer(this.clouds[i])) {
        this.repositionCloud(this.clouds[i]);
      }
      this.clouds[i].x += 1;
      this.clouds[i].y -= 1.35;
    }
  }

  addBrin() {
    PIXI.loader.reset();
    PIXI.loader.add(brin).load(() => {
      const { texture } = PIXI.loader.resources[brin];
      const rectangle = new PIXI.Rectangle(1082, 0, 593, 452);
      texture.frame = rectangle;
      this.brinSprite = new PIXI.Sprite(texture);
      this.positionBrin();
      this.stage.addChild(this.brinSprite);
      // this.moveBrin();
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
    this.updateCloud();
  }

  updateMoon() {
    this.moonSprite.x += 0.15;
    this.moonSprite.y -= 0.05;
    if (this.outsideContainer(this.moonSprite)) {
      this.rePositionMoon(this.moonSprite);
    }
  }

  updateDebris() {
    for (let i = 0; i < this.debris.length; i += 1) {
      this.debris[i].x += 1 * this.debris[i].xySpeed;
      this.debris[i].y -= 1 * this.debris[i].xySpeed;
      this.debris[i].rotation += 0.01 * this.debris[i].rotSpeed;
      if (this.outsideContainer(this.debris[i])) {
        this.positionDebris(this.debris[i]);
      }
    }
  }

  outsideContainer(sprite) {
    if (
      sprite.y < -sprite.height ||
      sprite.y > this.container.offsetHeight + sprite.height ||
      sprite.x < -sprite.width ||
      sprite.x > this.container.offsetWidth + sprite.width
    ) {
      return true;
    }
    return false;
  }
}
