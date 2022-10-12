import * as THREE from "three"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import universe from "./universe.jpg"
import {FontLoader} from "three/examples/jsm/loaders/FontLoader"
import {TextGeometry} from "three/examples/jsm/geometries/TextGeometry"
import typefaceFont from 'three/examples/fonts/helvetiker_regular.typeface.json'

console.log(typefaceFont)
//Scene and canvas
const canvas = document.querySelector("canvas.webgl")
const scene = new THREE.Scene()

const size = {
    width: window.innerWidth,
    height: window.innerWidth
}

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
controls.update

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


//Text 
const fontLoader = new FontLoader();
fontLoader.load(typefaceFont)
// fontLoader.load(
//   '../helvetiker_regular.typeface.json',
//   (droidFont) => {
//     const textGeometry = new TextGeometry('three.js', {
//       size: 20,
//       height: 4,
//       font: droidFont,
//     });
//     const textMaterial = new THREE.MeshNormalMaterial();
//     const textMesh = new THREE.Mesh(textGeometry, textMaterial);
//     textMesh.position.x = -45;
//     textMesh.position.y = 0;
//     test.scene.add(textMesh);
//   }
// );



//Animate
function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene,camera)
}

animate()