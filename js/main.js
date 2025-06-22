import { initScene } from './initScene.js';
import { createProduct } from './createProduct.js';
import { addLighting } from './addLighting.js';
import { setupMouseInteraction } from './interaction.js';
import { setupCameraAnimation } from './cameraAnimation.js';

let scene, camera, renderer, controls;
let product;
let animateCamera;
let checkIntersections;

function init() {
    const sceneElements = initScene();
    scene = sceneElements.scene;
    camera = sceneElements.camera;
    renderer = sceneElements.renderer;
    controls = sceneElements.controls;

    product = createProduct();
    product.name = "productGroup"; 
    scene.add(product);

    addLighting(scene);

    checkIntersections = setupMouseInteraction(camera, renderer, scene);

    animateCamera = setupCameraAnimation(camera, controls, product); 

    renderer.render(scene, camera);

    animate(0);
}

function animate(currentTime) {
    requestAnimationFrame(animate);

    controls.update();

    animateCamera(currentTime);

    if (checkIntersections) {
    }

    renderer.render(scene, camera);
}

document.addEventListener('DOMContentLoaded', init);