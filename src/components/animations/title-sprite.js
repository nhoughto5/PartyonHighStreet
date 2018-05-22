import spriteSheet from '../../images/brin_sprite.png';
import {TweenLite, Elastic} from 'gsap';

export default class TitleAnimation {
    constructor(){
        this.spriteWidth = 371;
        this.spriteHeight = 452;
        this.canvas = document.getElementById("spriteCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.img = new Image();
        this.img.src = spriteSheet;
        this.canvas.width = this.spriteWidth;
        this.canvas.height= this.spriteHeight;
        // this.frames = [0,1,2,1];
        this.frames = [
            {pos: 0, sX: 0}, 
            {pos: 1, sX: 374, sWidth: this.spriteWidth - 3}, 
            {pos: 2, sX: 712}, 
            {pos: 1, sX: 374, sWidth: this.spriteWidth - 3}];
        this.currentFrame = 0;
        this.img.onload = () => {
            this.draw(this.frames[0]);
            TweenLite.from(this.canvas,1.5, {
                scale: 0.1,
                rotation: 90,
                ease: Elastic.easeOut.config(1.2, 0.75),
                onComplete: () => {
                    this.animate();
                }
            });
        }
    }

    draw(frame){
        let sx = frame.sX; 
        let sy = 0; 
        let sWidth = frame.sWidth || this.spriteWidth; 
        let sHeight = this.spriteHeight; 
        let dx = 0; 
        let dy = 0; 
        let dWidth = this.canvas.width; 
        let dHeight = this.canvas.height;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    }

    animate(){
        window.setInterval(() => {
            const frameNum = this.frames[this.currentFrame];
            console.log("Frame: " + frameNum);
            this.draw(frameNum);
            this.currentFrame = (this.currentFrame + 1) % this.frames.length;
          }, 100);
    }


}