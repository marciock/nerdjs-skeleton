import '@webcomponents/custom-elements';
import {Creator} from '../../../dist/nerdcreator';

//import  'whatwg-fetch';
export class Input extends Creator{
    constructor(){
        super();
       
    }
    render(){
        
        return (
            `<div class="row">

                <div class="input-field col s12">
                    <input id="${this.getProps('id')}" type="${this.getProps('type')}" name="${this.getProps('name')}  value />
                    <label for="${this.getProps}">${this.getProps('label')}</label>
                </div>
            </div>
            `
        )
    }
    callBack(){

        let el=this.el();
        let input=el.getElementsByTagName('input');
        
        this.addEventListener('change',(f,g)=>{
            console.log(g)
        })
        
    }
}

customElements.define('nd-input',Input);
