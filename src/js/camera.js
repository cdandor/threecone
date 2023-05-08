import { PerspectiveCamera } from "three"

export default function () {
  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )

  camera.position.z = 100
  return camera
}
