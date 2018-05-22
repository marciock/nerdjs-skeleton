import '@webcomponents/custom-elements';
import {Creator} from '../../../dist/nerdcreator';
import {NdLink} from   '../../../dist/nerdrouter';

export class NdIcon extends Creator{

    constructor(){
      
        super();

    }
    render(){

        

        return (`
        <div class="col s4" style="text-align:center;">
            <nd-link url="${this.getProps('url')}" component="${this.getProps('component')}">
                <img src="${this.getProps('icon')}">
                <h4>${this.getProps('title')}</h4>
            </nd-link>
        </div>
        
        `)

    }


}
customElements.define('nd-icon',NdIcon);

