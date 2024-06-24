import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
// Positivo: para direita | Negativo: para esquerda
mesh.position.x = 0.3;
// Positivo: para cima | Negativo: para baixo
mesh.position.y = 1;
// Positivo: pra frente | Negativo: para trás
mesh.position.z = -1;
// Ou:
// mensh.position.set(0.3, 1, -1);
scene.add(mesh)

// Apenas para visualizar os heixos x, y e z
const axes = new THREE.AxesHelper();
scene.add(axes);

// Pega o comprimento do vetor e ajusta todos para comprimento 1
// mesh.position.normalize()

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Distância entre a malha e a câmera
console.log(mesh.position.distanceTo(camera.position))

/**
 * Renderer - Qualquer bloco abaixo da renderização, não surtirá efeito
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)