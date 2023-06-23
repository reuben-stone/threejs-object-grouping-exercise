import EventEmitter from './EventEmitter'
import * as dat from 'lil-gui'

export default class Debug extends EventEmitter
{
    constructor()
    {
        super()
        
        this.ui = new dat.GUI()
        this.ui.title('Actions')
        
        this.actionsObj = {
            explodeObjects: () => 
            {
                this.trigger('explode')
            },
            clusterObjects: () => 
            {
                this.trigger('cluster')
            },
            resetObjects: () => 
            {
                this.trigger('reset')
            }   
        }
        this.ui.add(this.actionsObj, 'explodeObjects').name('Explode')
        this.ui.add(this.actionsObj, 'clusterObjects').name('Cluster')
        this.ui.add(this.actionsObj, 'resetObjects').name('Reset')
    }
}