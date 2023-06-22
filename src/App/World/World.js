import App from '../App.js'
import Environment from './Environment.js'
import Building from './Building.js'
import Apartment from './Apartment.js'

export default class World
{
    constructor()
    {
        this.app = new App()
        this.scene = this.app.scene
        this.resources = this.app.resources

        // Wait for the resources to load
        this.resources.on('ready', () => 
        {
            // Setup
            this.environment = new Environment()
            this.building = new Building()
            this.apartment = new Apartment()

            // const KOPEModel2 = this.resources.items.KOPEModel2
            // KOPEModel2.scene.scale.set(0.3, 0.3, 0.3)
            // KOPEModel2.scene.position.set(- 2, - 4, 4.5)
            // KOPEModel2.scene.rotation.y = Math.PI * 0.5

            // this.scene.add(KOPEModel2.scene)
        })
    }

    update()
    {

    }
}