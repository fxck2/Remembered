import * as THREE from "three";

import { interactiveObjects, setupEnv }             from "./module/env.js"
import { setupListeners }                           from "./module/eventListeners.js"
import { animate }                                  from "./module/animate.js"
import { ObjectInfo  }                              from "./module/objectInfo.js";
import { attachLabel }                              from "./module/objectLabel.js";

import { ImgData, createGallery }                   from "./module/galleryImg.js"                      

const {scene, webglRenderer, labelRenderer, camera, controls, raycaster} = setupEnv();

setupListeners();

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); 
scene.add(ambientLight);

let i1 = new ObjectInfo("picture 1", "image", "the first picture");
let p1 = new ImgData("./pictures/p1.png", 411, 492, i1);
let i2 = new ObjectInfo("picture 2", "image", "the second picture");
let p2 = new ImgData("./pictures/p2.png", 421, 338, i2);
let pic = [p1, p2];

createGallery(scene, pic);

animate(scene, webglRenderer, labelRenderer, camera, controls, raycaster);