import * as THREE from 'three'
import App from '../App.js'

export default class Floor
{
    constructor()
    {
        this.app = new App()
        this.scene = this.app.scene
        this.resources = this.app.resources

        this.setGeometry()
        this.setTextures()
        this.setMaterial()
        this.setMesh()
    }

    setGeometry()
    {
        this.geometry = new THREE.CircleGeometry(5, 64)
    }

    setTextures()
    {
        this.textures = {}

        this.textures.color = this.resources.items.dirtColorTexture
        this.textures.color.encoding = THREE.sRGBEncoding
        this.textures.color.repeat.set(1, 1)
        this.textures.color.wrapS = THREE.RepeatWrapping
        this.textures.color.WrapT = THREE.RepeatWrapping

        this.textures.normal = this.resources.items.dirtNormalTexture
        this.textures.normal.repeat.set(1, 1)
    }

    setMaterial()
    {
        this.material = new THREE.MeshStandardMaterial({
            map: this.textures.color,
            normalMap: this.textures.normal
        })
    }

    setMesh()
    {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.rotation.x = - Math.PI * 0.5
        this.mesh.position.y = - 0.1
        this.mesh.receiveShadow = true
        this.scene.add(this.mesh)
    }
}