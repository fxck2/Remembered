import * as THREE from "three";

import { updateMovement } from "./move.js"

export const animate = (scene, renderer, camera, controls, raycaster) => {
    requestAnimationFrame(() => animate(scene, renderer, camera, controls, raycaster));
    updateMovement(camera, controls);
    const center = new THREE.Vector2(0, 0);
    raycaster.setFromCamera(center, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0 && intersects[0].distance < 3) {

        const targetObject = intersects[0].object;
        
        console.log('當前指到的物體是：', targetObject.name || targetObject);
    }
    renderer.render(scene, camera);
}