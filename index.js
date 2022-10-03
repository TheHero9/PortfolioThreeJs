import * as THREE from "three"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"

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
    wireframe: true} );
const plane = new THREE.Mesh( geometryPlane, materialPlane );
scene.add( plane );
plane.position.set(0,0,0)
plane.rotation.x = -0.5 * Math.PI


//Plane 1 
const geometryPlane1 = new THREE.PlaneGeometry( 5, 5 );
const materialPlane1 = new THREE.MeshBasicMaterial( {
    color: 0xFFFFFF,
    side: THREE.DoubleSide,
    wireframe: true} );
const plane1 = new THREE.Mesh( geometryPlane1, materialPlane1 );
plane1.position.set(0,2.5,-5)
scene.add( plane1 );

//Plane 2
const geometryPlane2 = new THREE.PlaneGeometry( 5, 5 );
const materialPlane2 = new THREE.MeshBasicMaterial( {
    color: 0xFFFFFF,
    side: THREE.DoubleSide,
    wireframe: true} );
const plane2 = new THREE.Mesh( geometryPlane2, materialPlane2 );
plane2.position.set(0,2.5, 5)
scene.add( plane2 );

//Plane 3
const geometryPlane3 = new THREE.PlaneGeometry( 5, 5 );
const materialPlane3 = new THREE.MeshBasicMaterial( {
    color: 0xFFFFFF,
    side: THREE.DoubleSide,
    wireframe: true} );
const plane3 = new THREE.Mesh( geometryPlane3, materialPlane3 );
plane3.position.set(-5, 2.5, 0)
plane3.rotation.y = -0.5 * Math.PI
scene.add(plane3);

//Plane 4
const geometryPlane4 = new THREE.PlaneGeometry( 5, 5 );
const materialPlane4 = new THREE.MeshBasicMaterial( {
    color: 0xFFFFFF,
    side: THREE.DoubleSide,
    wireframe: true} );
const plane4 = new THREE.Mesh( geometryPlane4, materialPlane4 );
plane4.position.set(5, 2.5, 0)
plane4.rotation.y = -0.5 * Math.PI
scene.add(plane4);

//Geometry
// const geometry = new THREE.TorusGeometry(10,1,10,11, 10)
// const mesh = new THREE.MeshBasicMaterial({
//     color: 0x999999
// })
// const torus = new THREE.Mesh(geometry,mesh)
// scene.add(torus)


//Slime
//Animate
function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene,camera)
}

animate()