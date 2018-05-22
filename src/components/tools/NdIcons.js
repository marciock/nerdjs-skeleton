import '@webcomponents/custom-elements';
import {Creator} from '../../../dist/nerdcreator';
import NdIcon from '../tools/NdIcon';
export class NdIcons extends Creator{

    constructor(){
      
        super();
       
      
    }
    render(){
        
        return (
            `<div class="row" style="margin-top:3em;">
            ${
                this.state.icons.map(f=>{
                    return (`
                        <nd-icon url="${f.url}" component="${f.component}" icon="${f.icon}" title="${f.title}">
                        </nd-icon>            
                    `)
                }).join('')
            }
            </div>`)

    }
}

customElements.define('nd-icons',NdIcons);
