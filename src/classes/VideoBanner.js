import * as THREE from 'three';
const OBJLoader = require('three-obj-loader');

export default class VideoBanner {
  constructor(){

    let OBJLoader = require('three-obj-loader');
    OBJLoader(THREE);

    this.container = document.getElementById('videoBannerContainer');
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color( 0xcce0ff );
    this.scene.fog = new THREE.Fog( 0xcce0ff, 500, 10000 );
    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 500);
    this.camera.position.set(0,10,20);

    this.light = new THREE.DirectionalLight( 0xdfebff, 1 );
    this.light.position.set( 50, 200, 100 );
    this.light.position.multiplyScalar( 1.3 );
    this.light.castShadow = true;
    this.light.shadow.mapSize.width = 1024;
    this.light.shadow.mapSize.height = 1024;
    let d = 300;
    this.light.shadow.camera.left = - d;
    this.light.shadow.camera.right = d;
    this.light.shadow.camera.top = d;
    this.light.shadow.camera.bottom = - d;
    this.light.shadow.camera.far = 1000;
    this.scene.add( this.light );

    this.loadCamera();

    const size = 100;
    const divisions = 100;
    let gridHelper = new THREE.GridHelper( size, divisions );
    this.scene.add(gridHelper);

    this.renderer = new THREE.WebGLRenderer( { antialias: true } );
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize(this.width, this.height );

    this.container.appendChild(this.renderer.domElement);
    this.renderer.gammaInput = true;
    this.renderer.gammaOutput = true;
    this.scene.add( new THREE.AmbientLight( 0x666666 ) );
    this.animate();
  }

  loadCamera(){
    let loader = new THREE.OBJLoader();
    loader.load('../assets/models/cameraModel.obj', (obj) => {
      this.scene.add(obj);
    });
  }

  animate() {
    window.requestAnimationFrame(() => {
      this.animate();
    });
    this.render();
  }

  render() {
    this.renderer.render( this.scene, this.camera );
  }
}