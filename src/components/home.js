import '@webcomponents/custom-elements';


import {Creator} from '../../dist/nerdcreator';
import {NavBar} from './tools/NavBar';
//import {NdIcons} from './tools/NdIcons';  
import {NdView} from '../../dist/nerdrouter';


export class Home extends Creator{

  
  render(){
    
  const teste="oi imundo"
    return (
      `<div>
        <nav-bar color="black"></nav-bar>
        
        
      </div>`
    )
  }

  
  }
//  window.suportCustomElements="customElements" in window;
 
  customElements.define('nd-home',Home);
  
 // const view=document.querySelector('nd-view');

  //view.innerHTML=`<nd-icons></nd-icons>`;
  
      
  
  
  
  
  
  





