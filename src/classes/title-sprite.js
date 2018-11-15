import {
  TweenLite,
  Power1
} from 'gsap';
import * as PIXI from 'pixi.js';
import spriteSheet from '../images/brin_sprite.png';
import devon from '../images/devonPose.png';
import travis from '../images/travisPose.png';

export default class TitleAnimation {
  constructor() {
      this.setUpBrin();
      this.setUpDevon();
      this.setUpTravis();
  }

  setUpDevon() {
      let app = new PIXI.Application({
          width: 200,
          height: 300,
          transparent: true,
      });
      let container = document.getElementById('left');
      container.appendChild(app.view);
      let sprite = PIXI.Sprite.fromImage(devon);
      const scale = 0.1;
      sprite.scale.set(scale, scale);
      let stage = app.stage;
      stage.addChild(sprite);
      TweenLite.from(container, 1.5, {
        opacity: 0,
        delay: 0.25,
        x: "+=100"
    });
  }

  setUpTravis() {
    let app = new PIXI.Application({
        width: 200,
        height: 300,
        transparent: true,
    });
    let container = document.getElementById('right');
    container.appendChild(app.view);
    let sprite = PIXI.Sprite.fromImage(travis);
    const scale = 0.1;
    sprite.scale.set(scale, scale);
    let stage = app.stage;
    stage.addChild(sprite);
    TweenLite.from(container, 1.5, {
        opacity: 0,
        delay: 0.5,
        x: "-=100",
    });
}

  setUpBrin() {
      this.spriteWidth = 371;
      this.spriteHeight = 452;
      this.canvasBrin = document.getElementById('spriteCanvasBrin');
      this.ctxBrin = this.canvasBrin.getContext('2d');
      this.imgBrin = new Image();
      this.imgBrin.src = spriteSheet;
      this.canvasBrin.width = this.spriteWidth;
      this.canvasBrin.height = this.spriteHeight;
      this.frames = [
        { pos: 0, sX: 0 },
        { pos: 1, sX: 374, sWidth: this.spriteWidth - 3 },
        { pos: 2, sX: 712 },
        { pos: 1, sX: 374, sWidth: this.spriteWidth - 3 }];
      this.currentFrame = 0;
      this.count = 0;
      this.imgBrin.onload = () => {
          this.draw(this.frames[0]);
          TweenLite.set(this.canvasBrin, {
              scale: 0.8
          })
          TweenLite.from(this.canvasBrin, 1.5, {
              scale: 0.1,
              opacity: 0,
              delay: 0.7,
              ease: Power1.easeOut,
              onComplete: () => {
                  this.moveBrin();
              },
          });
      };
  }

  draw(frame) {
      const sx = frame.sX;
      const sy = 0;
      const sWidth = frame.sWidth || this.spriteWidth;
      const sHeight = this.spriteHeight;
      const dx = 0;
      const dy = 0;
      const dWidth = this.canvasBrin.width;
      const dHeight = this.canvasBrin.height;
      this.ctxBrin.clearRect(0, 0, this.canvasBrin.width, this.canvasBrin.height);
      this.ctxBrin.drawImage(this.imgBrin, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
  }

  moveBrin() {
      window.setInterval(() => {
          const frameNum = this.frames[this.currentFrame];
          this.draw(frameNum);
          this.currentFrame = (this.currentFrame + 1) % this.frames.length;
      }, 100);
  }
}