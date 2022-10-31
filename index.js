import * as THREE from "three"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import universe from "./universe.jpg"
<<<<<<< HEAD
import background from "./background.jpg"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import typefaceFont from 'three/examples/fonts/helvetiker_regular.typeface.json'
import {CSS2DRenderer, CSS2DObject} from "three/examples/jsm/renderers/CSS2DRenderer"


=======
import typefaceFont from 'three/examples/fonts/helvetiker_regular.typeface.json'
import {CSS2DRenderer, CSS2DObject} from "three/examples/jsm/renderers/CSS2DRenderer"

>>>>>>> cccad0d494f3194d7ccf11cd85bb55e4ce3791cd

//Scene and canvas
const canvas = document.querySelector("canvas.webgl")
const scene = new THREE.Scene()

const size = {
    width: window.innerWidth,
    height: window.innerWidth
}


const textureLoader = new THREE.TextureLoader()
scene.background = textureLoader.load(background)

//Camera
const camera = new THREE.PerspectiveCamera(75, size.width/size.height)
camera.position.set(0,1,5)

//Renderer
const renderer = new THREE.WebGL1Renderer({
    canvas: canvas
})
renderer.setSize(size.width, size.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
renderer.render(scene, camera)


//Orbit COntrols
const controls = new OrbitControls(camera, renderer.domElement)
controls.update()

//Axis Helper
const axisHelperr = new THREE.AxesHelper()
scene.add(axisHelperr)

//Plane
const geometryPlane = new THREE.PlaneGeometry( 2, 2 );
const materialPlane = new THREE.MeshBasicMaterial( {
    color: 0xffff00,
    side: THREE.DoubleSide,
    wireframe: false} );
const plane = new THREE.Mesh( geometryPlane, materialPlane );
scene.add( plane );
plane.position.set(0,0,0)
plane.rotation.x = -0.5 * Math.PI


//Plane 1 
const geometryPlane1 = new THREE.PlaneGeometry( 5, 5 );
const materialPlane1 = new THREE.MeshBasicMaterial( {
    color: 0xFFFFFF,
    side: THREE.DoubleSide,
    wireframe: false} );
const plane1 = new THREE.Mesh( geometryPlane1, materialPlane1 );
plane1.position.set(0,2.5,-5)
scene.add( plane1 );

//Plane 2
const geometryPlane2 = new THREE.PlaneGeometry( 5, 5 );
const materialPlane2 = new THREE.MeshBasicMaterial( {
    color: 0xFFFFFF,
    side: THREE.DoubleSide,
    wireframe: false} );
const plane2 = new THREE.Mesh( geometryPlane2, materialPlane2 );
plane2.position.set(0,2.5, 5)
scene.add( plane2 );

//Plane 3
const geometryPlane3 = new THREE.PlaneGeometry( 5, 5 );
const materialPlane3 = new THREE.MeshBasicMaterial( {
    color: 0xFFFFFF,
    side: THREE.DoubleSide,
    wireframe: false} );
const plane3 = new THREE.Mesh( geometryPlane3, materialPlane3 );
plane3.position.set(-5, 2.5, 0)
plane3.rotation.y = -0.5 * Math.PI
scene.add(plane3);

//Plane 4
    const geometryPlane4 = new THREE.PlaneGeometry( 5, 5 );
        const materialPlane4 = new THREE.MeshBasicMaterial( {
            color: 0xFFFFFF,
            side: THREE.DoubleSide,
            wireframe: false} );
        const plane4 = new THREE.Mesh( geometryPlane4, materialPlane4 );
        plane4.position.set(5, 2.5, 0)
        plane4.rotation.y = -0.5 * Math.PI
         scene.add(plane4);

//Texture Loader
const TextureLoader = new THREE.TextureLoader()
plane1.material.map = TextureLoader.load(universe)
plane2.material.map = TextureLoader.load(universe)
plane3.material.map = TextureLoader.load(universe)
plane4.material.map = TextureLoader.load(universe)


const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight)
labelRenderer.domElement.style.position = "absolute"
labelRenderer.domElement.style.top = "0px"
labelRenderer.domElement.style.pointerEvents = "none"
document.body.appendChild(labelRenderer.domElement)

const p1 = document.createElement("p")
p1.textContent = "Projects:"
const cPointLabel1 = new CSS2DObject(p1)
scene.add(cPointLabel1)
cPointLabel1.position.set(0,4.5,-5)

const p2 = document.createElement("p")
p2.textContent = "About me:"
const cPointLabel2 = new CSS2DObject(p2)
scene.add(cPointLabel2)
cPointLabel2.position.set(0,4.5,5)

const p3 = document.createElement("p")
p3.textContent = "Skills:"
const cPointLabel3 = new CSS2DObject(p3)
scene.add(cPointLabel3)
cPointLabel3.position.set(5, 4.5, 0)

const p4 = document.createElement("p")
p4.textContent = "Skills:"
const cPointLabel4 = new CSS2DObject(p4)
scene.add(cPointLabel4)
cPointLabel4.position.set(-5, 4.5, 0)
<<<<<<< HEAD
=======


const div = document.createElement("div")
div.appendChild(p1)
const divContainer = new CSS2DObject(div)
scene.add(divContainer)
>>>>>>> cccad0d494f3194d7ccf11cd85bb55e4ce3791cd


const div5 = document.createElement("div")
div5.appendChild(p1)
const divContainer = new CSS2DObject(div5)
scene.add(divContainer)


// const loader = new GLTFLoader()
// loader.load("../PortfolioThreeJs/scene.gltf", function(gltf){
//     scene.add(gltf.scene);
//     renderer.render(scene, camera)
// })

//Animate
function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene,camera)

    labelRenderer.render(scene,camera)
}    

animate()

window.addEventListener("resize", function(){
    camera.aspect = window.innerWidth / this.window.innerHeight;
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    labelRenderer.setSize(this.window.innerWidth, this.window.innerHeight)
})