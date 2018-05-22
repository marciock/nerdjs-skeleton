import '@webcomponents/custom-elements';

import {Creator} from '../../../dist/nerdcreator';
import {NdLink} from '../../../dist/nerdrouter';
export class NavBar extends Creator{

    constructor(){
      
        super();
       
      
    }
   
    render(){
       
       

        return (
            `<nav>
            <div class="nav-wrapper ${this.getProps('color')}">
                <a href="#" class="brand-log">Logo</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><nd-link url="/" component="nd-icons" href="/">Home</a></li>
                    <li><nd-link url="/" component="nd-icons" href="/">Login</a></li>
                </ul>
            </div>
         </nav>
            `
        )
    }

}




customElements.define('nav-bar',NavBar);

