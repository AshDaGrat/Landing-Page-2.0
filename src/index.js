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
camera.position.setZ(30);
camera.position.setY(2);


const geometry = new THREE.BoxGeometry(1, 1, 1, 1, 1, 1)
const material = new THREE.MeshStandardMaterial({color: 0x89CFF0})
const Cube = new THREE.Mesh( geometry, material)
const pointLight = new THREE.AmbientLight(0xFFFFFF)
pointLight.position.set(5,5,5)
const gridhelper = new THREE.GridHelper(50,50)
const controls = new OrbitControls(camera, renderer.domElement);

scene.add(pointLight)
scene.add(Cube)
scene.add(gridhelper)
    
const animate = function(){
    requestAnimationFrame( animate );
    //Cube.rotation.x += 0.01
    controls.update()
    renderer.render(scene, camera);
}

animate();