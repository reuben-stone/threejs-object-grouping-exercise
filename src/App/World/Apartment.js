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
        this.debug.on('explode', () => 
        {
            this.explode()
        })
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

    explode()
    {
        this.model.traverse((child) => 
        {
            if(child instanceof THREE.Mesh)
            {
                switch (child.material.color.b) 
                {
                    case 0.7254902:
                        // Central concrete walls
                        child.position.set(0, - 30, 0)
                        break
                    case 1:
                        // Wallpaper
                        child.position.set(0, - 20, 0)
                        break
                    case 0.47058824:
                        // Rendering?
                        child.position.set(0, - 10, 0)
                        break
                    case 0.4117647:
                        // Plaster board panels
                        child.position.set(0, 10, 0)
                        break
                    default: 
                }
            }
        })
    }

    cluster()
    {
        // Set empty clusters object
        let clusteredObjects = {}
        clusteredObjects.concrete = []
        clusteredObjects.wallpaper = []
        clusteredObjects.rendering = []
        clusteredObjects.plaster = []

        this.model.traverse((child) => 
        {
            if(child instanceof THREE.Mesh)
            {
                switch (child.material.color.b) 
                {
                    case 0.7254902:
                        // concrete
                        clusteredObjects.concrete.push(child)
                        break
                    case 1:
                        // Wallpaper
                        clusteredObjects.wallpaper.push(child)
                        break
                    case 0.47058824:
                        // Rendering
                        clusteredObjects.rendering.push(child)
                        break
                    case 0.4117647:
                        // Plaster board 
                        clusteredObjects.plaster.push(child)
                        break
                    default: 
                }
            }
        })

        // console.log(clusteredObjects)

        for(const cluster in clusteredObjects)
        {      
            alert(`Current cluster is ${cluster}, and has ${cluster.length} objects`)
            
            // Group the meshes in this cluster


        }
    }
    
    reset()
    {
        this.model.traverse((child) => 
        {
            if(child instanceof THREE.Mesh)
            {
                child.position.set(0, 0, 0)
            }
        })
    }

}