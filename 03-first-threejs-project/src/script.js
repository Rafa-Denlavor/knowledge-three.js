import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene - é como um container que guarda os objetos, modelos, partículas, 
// luzes, entre outros. Em algum momento é necessário renderizar essa cena.
const scene = new THREE.Scene()

/**
 * Object - Podem ser muitas coisas. 
 * Pode ter geometrias, modelos importados, párticulas, luzes e muito mais.
 */

// geometry - Tipo do elemento e seu tamanho
const geometry = new THREE.BoxGeometry(1, 1, 1)
// material - Basicamente é a classe responsável por adicionar algumas estilizaçãos como cor, wireframe, reflexividade
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
// mash - Cria a malha final, recebendo a geometria e o material
const mesh = new THREE.Mesh(geometry, material)

// Adicionando a malha à cena
scene.add(mesh)

/**
 * Sizes - Define o tamanho da Câmera da cena
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera - Utilizada como ponto de vista teórico e 
 * é possível ter quantas forem necessárias para alternar entre elas. 
 * Porém, o comum é usar apenas uma.
 */
const camera = new THREE.PerspectiveCamera(100 /* Campo de visão/Ângulo de visão */, 
sizes.width / sizes.height)
// Move para frente e para trás
camera.position.z = 2

// Modifica a posição em que vemos a malha
camera.position.x = 1
//scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

// Redimenciosa a tag Canvas no HTML
renderer.setSize(sizes.width, sizes.height)

// Renderizar tudo
renderer.render(scene, camera)