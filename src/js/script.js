import { Scene, WebGLRenderer } from "three"
import Cone from "./cone"
import Camera from "./camera"
const scene = new Scene()
const camera = Camera()
const renderer = new WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
scene.add(Cone(0xff00ff))
function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
animate()
