import * as THREE from 'three';

let autoRotate = true;
let userInteracting = false;

export function setupCameraAnimation(camera, controls, targetObject) {
    const rotationSpeed = 0.0005; 
    let lastTime = 0;

    controls.addEventListener('start', () => {
        userInteracting = true;
    });
    controls.addEventListener('end', () => {
        userInteracting = false;
    });

    return function animateCamera(currentTime) {
        if (!autoRotate || userInteracting) {
            return; 
        }

        const deltaTime = currentTime - lastTime;
        lastTime = currentTime;

        if (isNaN(deltaTime) || deltaTime <= 0) { 
            return;
        }

        // Rotate the camera around the target object (assumed to be at origin)
        const radius = camera.position.distanceTo(targetObject.position);
        const angle = controls.getAzimuthalAngle() + rotationSpeed * deltaTime;

        camera.position.x = targetObject.position.x + radius * Math.sin(angle);
        camera.position.z = targetObject.position.z + radius * Math.cos(angle);

        camera.lookAt(targetObject.position);
        
        controls.update(); 
    };
}

export function toggleAutoRotate(enabled) {
    autoRotate = enabled;
}