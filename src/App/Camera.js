import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import App from './App.js'

export default class Camera
{
    constructor()
    {
        // Setup
        this.app = new App()
        this.sizes = this.app.sizes
        this.scene = this.app.scene
        this.canvas = this.app.canvas

        this.setInstance()
        this.setOrbitControls()
    }

    setInstance()
    {
        this.instance = new THREE.PerspectiveCamera(110, this.sizes.width / this.sizes.height, 0.1, 100)
        this.instance.position.set(2.8, 1.8, 7.2)
        this.scene.add(this.instance)
    }

    setOrbitControls()
    {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
    }

    resize()
    {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update()
    {
        this.controls.update()
    }
}