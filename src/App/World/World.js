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
        })
    }

    update()
    {

    }
}