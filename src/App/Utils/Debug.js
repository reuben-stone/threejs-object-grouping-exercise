import EventEmitter from './EventEmitter'
import * as dat from 'lil-gui'

export default class Debug extends EventEmitter
{
    constructor()
    {
        super()
        
        this.ui = new dat.GUI()
        this.ui.title('Options')

        this.actionsFolder = this.ui.addFolder( 'Actions' )
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
        this.actionsFolder.add(this.actionsObj, 'clusterObjects').name('Cluster Objects')
        this.actionsFolder.add(this.actionsObj, 'resetObjects').name('Reset')
    }
}