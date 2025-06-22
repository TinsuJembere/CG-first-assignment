import * as THREE from 'three';

export function createProduct() {
    const productGroup = new THREE.Group();

    const chairMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513, roughness: 0.7, metalness: 0.1 }); // SaddleBrown

    // Chair Seat
    const seatGeometry = new THREE.BoxGeometry(2, 0.2, 2);
    const seat = new THREE.Mesh(seatGeometry, chairMaterial);
    seat.position.y = 1.5;
    seat.name = "Chair Seat";
    productGroup.add(seat);

    // Chair Back
    const backGeometry = new THREE.BoxGeometry(2, 1.5, 0.2);
    const back = new THREE.Mesh(backGeometry, chairMaterial);
    back.position.set(0, 2.25, -0.9); // Adjusted Y for back
    back.name = "Chair Back";
    productGroup.add(back);

    // Chair Legs
    const legMaterial = new THREE.MeshStandardMaterial({ color: 0x5C4033, roughness: 0.8, metalness: 0.1 }); // Darker brown
    const legGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1.5, 8);

    const leg1 = new THREE.Mesh(legGeometry, legMaterial);
    leg1.position.set(-0.8, 0.75, 0.8);
    leg1.name = "Chair Leg (Front-Left)";
    productGroup.add(leg1);

    const leg2 = new THREE.Mesh(legGeometry, legMaterial);
    leg2.position.set(0.8, 0.75, 0.8);
    leg2.name = "Chair Leg (Front-Right)";
    productGroup.add(leg2);

    const leg3 = new THREE.Mesh(legGeometry, legMaterial);
    leg3.position.set(-0.8, 0.75, -0.8);
    leg3.name = "Chair Leg (Back-Left)";
    productGroup.add(leg3);

    const leg4 = new THREE.Mesh(legGeometry, legMaterial);
    leg4.position.set(0.8, 0.75, -0.8);
    leg4.name = "Chair Leg (Back-Right)";
    productGroup.add(leg4);


    return productGroup;
}