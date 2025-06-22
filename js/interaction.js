import * as THREE from 'three';

let raycaster;
let mouse;
let INTERSECTED_OBJECT = null; 
let originalColors = new Map(); 

export function setupMouseInteraction(camera, renderer, scene) {
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    const productInfoPanel = document.getElementById('product-info');

    function onMouseMove(event) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        
        checkIntersections(scene, camera, productInfoPanel);
    }

    function onMouseClick(event) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children, true); 

        if (intersects.length > 0) {
            const clickedObject = intersects[0].object;
            if (clickedObject.parent.name === 'productGroup') { 
                console.log("Clicked:", clickedObject.name);

                const originalColor = clickedObject.material.color.getHex();
                clickedObject.material.color.setHex(0xff0000); 
                setTimeout(() => {
                    clickedObject.material.color.setHex(originalColor); 
                }, 200);

            }
        }
    }

    function checkIntersections(scene, camera, productInfoPanel) {
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children, true);

        if (intersects.length > 0) {
            const intersected = intersects[0].object;
            if (intersected.parent && intersected.parent.name === 'productGroup') {
                if (INTERSECTED_OBJECT !== intersected) {
                    if (INTERSECTED_OBJECT && originalColors.has(INTERSECTED_OBJECT)) {
                        INTERSECTED_OBJECT.material.color.set(originalColors.get(INTERSECTED_OBJECT));
                    }

                    originalColors.set(intersected, intersected.material.color.clone());
                    intersected.material.color.setHex(0xffff00);

                    INTERSECTED_OBJECT = intersected;

                    productInfoPanel.textContent = intersected.name;
                    productInfoPanel.style.left = `${mouse.x * 0.5 * window.innerWidth + window.innerWidth / 2 + 15}px`;
                    productInfoPanel.style.top = `${-mouse.y * 0.5 * window.innerHeight + window.innerHeight / 2 + 15}px`;
                    productInfoPanel.style.display = 'block';
                }
            } else {
                if (INTERSECTED_OBJECT && originalColors.has(INTERSECTED_OBJECT)) {
                    INTERSECTED_OBJECT.material.color.set(originalColors.get(INTERSECTED_OBJECT));
                    INTERSECTED_OBJECT = null;
                    productInfoPanel.style.display = 'none';
                }
            }
        } else {
            if (INTERSECTED_OBJECT && originalColors.has(INTERSECTED_OBJECT)) {
                INTERSECTED_OBJECT.material.color.set(originalColors.get(INTERSECTED_OBJECT));
                INTERSECTED_OBJECT = null;
                productInfoPanel.style.display = 'none';
            }
        }
    }

    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('click', onMouseClick);

    return checkIntersections;
}