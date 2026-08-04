import * as THREE from "three";

import { interactiveObjects }                           from "./env.js";
import { updateMovement }                               from "./move.js";
import { objectInfo }                                   from "./objectInfo.js";
import { showSideInfoPanel, hideSideInfoPanel }         from "./sideInfoPanel.js"    

export const animate = (scene, webglRenderer, labelRenderer, camera, controls, raycaster) => {
    requestAnimationFrame(() => animate(scene, webglRenderer, labelRenderer, camera, controls, raycaster));
    updateMovement(camera, controls);
    const center = new THREE.Vector2(0, 0);
    raycaster.setFromCamera(center, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0 && intersects[0].distance < 3) {
        const targetObject = intersects[0].object;
        showSideInfoPanel(targetObject.userData.info);
    }else{
        hideSideInfoPanel();
    }

    for (let i = 0; i < interactiveObjects.length; i++) {
        const targetObject = interactiveObjects[i];
        const distSq = camera.position.distanceToSquared(targetObject.position);
        
        const cssObj = targetObject.userData.css2dObject;
        const info = targetObject.userData.info;

        if (distSq <= 9) {
            cssObj.element.style.opacity = '1';
            cssObj.visible = true;
        } else {
            cssObj.element.style.opacity = '0';
            cssObj.visible = false;
        }
    }

    webglRenderer.render(scene, camera);
    labelRenderer.render(scene, camera);
}