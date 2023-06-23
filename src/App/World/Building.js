import * as THREE from 'three'
import App from '../App.js'

export default class Building
{
    constructor()
    {
        this.app = new App()
        this.scene = this.app.scene
        this.resources = this.app.resources
        this.debug = this.app.debug

        // Setup
        this.resource = this.resources.items.KOPEModel1

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
        this.model.scale.set(0.1, 0.1, 0.1)
        this.model.position.set(- 1, - 4, 0)
        this.model.rotation.y = - Math.PI * 0.5
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
                // console.log(child)

                switch (child.material.color.b) 
                {
                    case 1:
                        // Frame
                        child.position.set(- 65, 100, 0)
                        break
                    case 0.8627451:
                        // Floor
                        child.position.set(- 70, 0, - 15)
                        break
                    case 0.6666667:
                        // Platform
                        child.position.set(- 130, 20, 0)
                        break
                    case 0.54901963:
                        // Roof/Floor
                        child.position.set(- 70, - 130, 0)
                        break
                    case 0.29803923:
                        // Yellow apartment
                        child.position.set(0, 100, - 15)
                        break
                    case 0.6156863:
                        // Turquoise apartment
                        child.position.set(0, - 100, - 15)
                        break
                    case 0.24705882:
                        // Tan apartment
                        child.position.set(0, 0, - 15)
                    default: 
                }
            }
        })
    }

    cluster()
    {
        // console.log(this.app)

        // this.model.traverse((child) => 
        // {
        //     if(child instanceof THREE.Mesh)
        //     {
        //         // console.log(child)

        //         switch (child.material.color.b) 
        //         {
        //             case 1:
        //                 // Frame
        //                 child.position.set(- 65, 100, 0)
        //                 break
        //             case 0.8627451:
        //                 // Floor
        //                 child.position.set(- 70, 0, - 15)
        //                 break
        //             case 0.6666667:
        //                 // Platform
        //                 child.position.set(- 130, 20, 0)
        //                 break
        //             case 0.54901963:
        //                 // Roof/Floor
        //                 child.position.set(- 70, - 130, 0)
        //                 break
        //             case 0.29803923:
        //                 // Yellow apartment
        //                 child.position.set(0, 100, - 15)
        //                 break
        //             case 0.6156863:
        //                 // Turquoise apartment
        //                 child.position.set(0, - 100, - 15)
        //                 break
        //             case 0.24705882:
        //                 // Tan apartment
        //                 child.position.set(0, 0, - 15)
        //             default: 
        //         }
        //     }
        // })
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