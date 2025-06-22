import * as THREE from 'three';

export function addLighting(scene) {
    // Ambient Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); 
    scene.add(ambientLight);

    // Directional Light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7); 
    directionalLight.castShadow = true; 
    scene.add(directionalLight);
}