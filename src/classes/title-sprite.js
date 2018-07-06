import { TweenLite, Power1 } from 'gsap';
import spriteSheet from '../images/brin_sprite.png';

export default class TitleAnimation {
  constructor() {
    this.spriteWidth = 371;
    this.spriteHeight = 452;
    this.canvas = document.getElementById('spriteCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.img = new Image();
    this.img.src = spriteSheet;
    this.canvas.width = this.spriteWidth;
    this.canvas.height = this.spriteHeight;
    this.frames = [
      { pos: 0, sX: 0 },
      { pos: 1, sX: 374, sWidth: this.spriteWidth - 3 },
      { pos: 2, sX: 712 },
      { pos: 1, sX: 374, sWidth: this.spriteWidth - 3 }];
    this.currentFrame = 0;
    this.count = 0;
    this.img.onload = () => {
      this.draw(this.frames[0]);
      TweenLite.from(this.canvas, 1.5, {
        scale: 0.1,
        opacity: 0,
        delay: 0.5,
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
    const dWidth = this.canvas.width;
    const dHeight = this.canvas.height;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
  }

  moveBrin() {
    window.setInterval(() => {
      const frameNum = this.frames[this.currentFrame];
      this.draw(frameNum);
      this.currentFrame = (this.currentFrame + 1) % this.frames.length;
    }, 100);
  }
}
