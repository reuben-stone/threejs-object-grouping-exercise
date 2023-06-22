import * as THREE from 'three'
import App from '../App.js'

export default class Apartment
{
    constructor()
    {
        this.app = new App()
        this.scene = this.app.scene
        this.resources = this.app.resources
        this.debug = this.app.debug

        // Setup
        this.resource = this.resources.items.KOPEModel2

        this.setModel()

        // Debug
        this.debug.on('cluster', () => 
        {
            this.cluster()
        })
        this.debug.on('reset', () => 
        {
            this.reset()
        })
    }

    setModel()
    {
        this.model = this.resource.scene
        this.model.scale.set(0.3, 0.3, 0.3)
        this.model.position.set(- 2, - 4, 4.5)
        this.model.rotation.y = Math.PI * 0.5
        this.scene.add(this.model)

        this.model.traverse((child) => 
        {
            if(child instanceof THREE.Mesh)
            {
                child.castShadow = true
            }
        })
    }

    cluster()
    {
        console.log("Clustering objects")
    }
    reset()
    {
        console.log("Resetting")
    }

}