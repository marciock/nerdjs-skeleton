import {Creator} from '../../../dist/nerdcreator';
import {NdLink} from '../../../dist/nerdrouter';

//import  'whatwg-fetch';
export class Fab extends Creator{
    constructor(){
        super();
       
    }
    render(){
    
        return (
            `<div class="row">
                <div class="fixed-action-btn">
                    <a class="btn-floating btn-large red"><i class="large material-icons">apps</i></a>
               
                <ul>
                    <li><nd-link class="btn-floating green" url="#/novousuario" component="novo-usuario"><i class="material-icons">add</i></nd-link></li> 
                    <li><a class="btn-floating red"><i class="material-icons">mode_edit</i></a></li> 
                    <li><a class="btn-floating blue"><i class="material-icons">home</i></a></li> 
                </ul>
                </div>
                
            </div>
            `
        )
    }
}

customElements.define('nd-fab',Fab);