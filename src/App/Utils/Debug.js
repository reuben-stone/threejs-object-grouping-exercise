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
            clusterObjects: () => 
            {
                this.trigger('cluster')
            },
            resetObjects: () => 
            {
                this.trigger('reset')
            }   
        }
        this.ui.add(this.actionsObj, 'clusterObjects').name('Cluster Objects')
        this.ui.add(this.actionsObj, 'resetObjects').name('Reset')
    }
}