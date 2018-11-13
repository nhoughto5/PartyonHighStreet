import * as PIXI from 'pixi.js';
import { TweenMax } from 'gsap';
import brin from '../images/brin_sprite.png';
import Utility from './Utility';
import cloud1 from '../images/cloud1.png';
import cloud2 from '../images/cloud2.png';
import cloud3 from '../images/cloud3.png';
import leaf1 from '../images/leaf1.png';
import snowflake1 from '../images/snowflake1.png';
import moon from '../images/Moon.png';
import devon from '../images/DevonJump.png';
import travis from '../images/TravisJump.png';

export default class FallingAnimation {
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
    this.normalPageSize = 1920;
    this.addMoon();
    this.addDebris(leaf1, 0.01, 5);
    this.addDebris(snowflake1, 0.1, 5);
    this.addBrin();
    this.devonSprite = this.addSprite(devon, 0.06, 0.65, 1.1, 0);
    this.travSprite = this.addSprite(travis, 0.075, 0.2, 0.5, 180, true);//this.container.offsetHeight + Utility.randomNumFromRange(50, 100));
    this.addCloud(cloud1);
    this.addCloud(cloud2);
    this.addCloud(cloud3);
    this.attachListeners();
    this.app.ticker.add(this.animate, this);
  }

  addSprite(image, scale = 0.05, xPercent, yPercent, startAngle, spin = false) {
    let sprite = PIXI.Sprite.fromImage(image);
    sprite.scale.set(-scale, scale);
    this.stage.addChild(sprite);
    sprite.x = this.container.offsetWidth * xPercent;
    sprite.y = this.container.offsetHeight * yPercent;
    sprite.currentRotAngle = startAngle;
    sprite.fallSpeed = Utility.randomNumFromRange(0.2, 0.5);
    sprite.startX = sprite.x;
    sprite.startY = sprite.y;
    sprite.spin = spin;
    sprite.pivot.set(sprite.width / 2, sprite.height / 2);
    return sprite;
  }

  addBrin() {
    PIXI.loader.reset();
    PIXI.loader.add(brin).load(() => {
      const { texture } = PIXI.loader.resources[brin];
      const rectangle = new PIXI.Rectangle(1082, 0, 593, 452);
      texture.frame = rectangle;
      this.brinSprite = new PIXI.Sprite(texture);
      let scale = 0.7 * window.innerWidth / this.normalPageSize;
      this.brinSprite.scale.set(scale, scale);
      this.stage.addChild(this.brinSprite);
      this.spriteXSpeed = 1;
      this.spriteYSpeed = 1;
      this.brinAngle = 0;
      this.container.style.height = 'auto';
    });
  }

  attachListeners() {
    window.addEventListener('resize', () => {
      this.resize();
    });
  }

  resize() {
    if (window.innerWidth / window.innerHeight >= this.ratio) {
      var w = window.innerHeight * this.ratio;
      var h = window.innerHeight;
    } else {
      var w = window.innerWidth;
      var h = window.innerWidth / this.ratio;
    }
    this.renderer.view.style.width = w + 'px';
    this.renderer.view.style.height = h + 'px';
    if (this.brinSprite) {
      const scale = window.innerWidth / this.normalPageSize;
      this.brinSprite.scale.set(scale, scale);
      this.positionBrin();
    }
  }

  positionBrin() {
    if(!this.brinSprite) return;
    this.brinSprite.x = this.container.offsetWidth / 2 - this.brinSprite.width / 2;
    this.brinSprite.y = this.container.offsetHeight / 2 - this.brinSprite.height / 2;
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

  moveBrin(delta) {
    const amplitude = 25;
    if(!this.brinSprite) return;
    this.brinSprite.x = (this.container.offsetWidth / 2 - this.brinSprite.width / 2) + amplitude * Math.sin(this.brinAngle * 0.02);
    this.brinSprite.y = (this.container.offsetHeight / 2 - this.brinSprite.height / 2) + amplitude * Math.sin(this.brinAngle * 0.02);
    this.brinAngle += delta;
  }

  moveSprite(sprite, delta) {
    const amplitude = 0.5;
    const freq = 0.03;
    let fallspeed = 0.35;
    sprite.y -= delta * fallspeed;
    sprite.x += 0.5 + amplitude * (Math.sin(sprite.currentRotAngle * freq));
    sprite.currentRotAngle += delta;
    if (sprite.spin) sprite.rotation += 0.001 * (Math.sin(freq * sprite.currentRotAngle) + 5);
    if (sprite.y < -sprite.height) {
      sprite.x = sprite.startX;
      sprite.y = this.container.offsetHeight + sprite.height;
      sprite.fallSpeed = Utility.randomNumFromRange(0.2, 0.5);
    }
  }

  animate(delta) {
    this.updateDebris();
    this.updateMoon();
    this.updateCloud();
    this.moveBrin(delta);
    this.moveSprite(this.travSprite, delta);
    this.moveSprite(this.devonSprite, delta);
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
