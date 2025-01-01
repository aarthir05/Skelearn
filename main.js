import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

// Set up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container3D").appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 0, 10000); // Set further back for a wider view
camera.lookAt(scene.position);

const ambientLight = new THREE.AmbientLight(0x404040); // Soft light from all directions
scene.add(ambientLight);

// Add multiple directional lights for better illumination from all sides
const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight1.position.set(1, 1, 1).normalize();
scene.add(directionalLight1);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight2.position.set(-1, 1, -1).normalize();
scene.add(directionalLight2);

const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight3.position.set(1, -1, -1).normalize();
scene.add(directionalLight3);

const directionalLight4 = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight4.position.set(-1, -1, 1).normalize();
scene.add(directionalLight4);

// Load the skeleton model
const fbxLoader = new FBXLoader();
const fbxModelURL = 'models/skeleton_animated.FBX';

// Create a raycaster for detecting mouse events
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let INTERSECTED;

// Tooltip element
const tooltip = document.createElement('div');
tooltip.style.position = 'absolute';
tooltip.style.background = '#fff';
tooltip.style.padding = '5px';
tooltip.style.border = '1px solid #000';
tooltip.style.borderRadius = '5px';
tooltip.style.display = 'none';
tooltip.style.pointerEvents = 'none';
document.body.appendChild(tooltip);

// Load the FBX model
fbxLoader.load(
  fbxModelURL,
  function (fbx) {
    const skeleton = fbx;
    skeleton.scale.set(1, 1, 1);
    skeleton.position.y = -50;
    scene.add(skeleton);

    skeleton.traverse(function (child) {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: 0x808080,
          roughness: 0.5,
          metalness: 0.5
        });

        // Store the name of the bone for tooltips
        child.userData = { boneName: child.name || 'Unknown Bone' };
      }
    });
  },
  function (xhr) {
    // Optionally log loading progress
  },
  function (error) {
    console.error('An error occurred while loading resources:', error);
  }
);

function animate() {
  requestAnimationFrame(animate);
  controls.update(); 
  renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Event listener for mouse movement
document.addEventListener('mousemove', onMouseMove, false);

function onMouseMove(event) {
  event.preventDefault();
  
  // Update mouse coordinates
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
  // Update the raycaster with the current camera and mouse position
  raycaster.setFromCamera(mouse, camera);
  
  const intersects = raycaster.intersectObjects(scene.children, true);

  if (intersects.length > 0) {
    const object = intersects[0].object;

    // Display tooltip
    tooltip.style.display = 'block';
    tooltip.innerHTML = object.userData.boneName;
    tooltip.style.left = `${event.clientX + 10}px`;
    tooltip.style.top = `${event.clientY + 10}px`;
  } else {
    tooltip.style.display = 'none';
  }
}

// Event listener for mouse click (zoom-in functionality)
document.addEventListener('click', onClick, false);

function onClick() {
  if (INTERSECTED) {
    const targetPosition = INTERSECTED.position.clone();
    controls.target.copy(targetPosition);
    
    const distance = 50; // Define zoom distance
    const direction = new THREE.Vector3().subVectors(camera.position, targetPosition).normalize();
    camera.position.copy(targetPosition).add(direction.multiplyScalar(distance));
    
    controls.update();
  }
}
