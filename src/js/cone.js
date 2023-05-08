import { ConeGeometry, MeshBasicMaterial, Mesh } from "three"
export default function (color) {
  const geometry = new ConeGeometry(5, 20, 32)
  const material = new MeshBasicMaterial({ color: color })
  const cone = new Mesh(geometry, material)
  return cone
}
