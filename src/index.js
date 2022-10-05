import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { StrictMode } from "react";
import App from './App';
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
const renderer = new THREE.WebGLRenderer(
    {
        canvas: document.querySelector("#bg"),
    }
)

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(5);
camera.position.setY(1);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const geometry2 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff});
  const material2 = new THREE.MeshBasicMaterial({ color: 0xffffff , wireframe: true });
  const star = new THREE.Mesh(geometry, material);
  const box = new THREE.Mesh(geometry2, material2);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  box.position.set(x, y, z);
  box.rotation.set(x, y, z);
  scene.add(star);
  scene.add(box)
}

Array(200).fill().forEach(addStar);


const geometry = new THREE.BoxGeometry(1, 1, 1, 1, 1, 1)
const material = new THREE.MeshStandardMaterial({color: 0x89CFF0})
const Cube = new THREE.Mesh( geometry, material)
const pointLight = new THREE.AmbientLight(0xFFFFFF)
pointLight.position.set(5,5,5)
//const gridhelper = new THREE.GridHelper(500,500)
const controls = new OrbitControls(camera, renderer.domElement);

scene.add(pointLight)

Cube.position.set(5, 0, 0);
scene.add(Cube)
//scene.add(gridhelper)
    
const animate = function(){
    requestAnimationFrame(animate);
    Cube.rotation.x += 0.01
    Cube.rotation.y += 0.01
    Cube.rotation.z += 0.01
    controls.update()
    renderer.render(scene, camera);
}

animate();