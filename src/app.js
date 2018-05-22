import '@webcomponents/custom-elements';


import {Creator} from '../dist/nerdcreator';
import NavBar from '../src/components/tools/NavBar';
import NdIcons from '../src/components/tools/NdIcons';  
import {NdView} from '../dist/nerdrouter';
import Usuarios from './components/usuarios';
import {NovoUsuario} from './components/novousuario';

export class Apps extends Creator{

  constructor(){
    
      super();
       // let variavel="Cotton";
       this.home=[
        {
          'title':'Usuários',
          'icon':'http://localhost/novoprojeto/assets/icons/usuarios.svg',
          'url':'#/usuarios',
          'component':'nd-usuarios'
        },
        {
          'title':'Documentos',
          'icon':'http://localhost/novoprojeto/assets/icons/documentos.svg',
          'url':'#/documentos',
          'component':'nd-documentos'
        },
        {
          'title':'Comitês',
          'icon':'http://localhost/novoprojeto/assets/icons/comites.svg',
          'url':'#/comites',
          'component':'nd-comites'
        },
        {
          'title':'Ideias',
          'icon':'http://localhost/novoprojeto/assets/icons/ideias.svg',
          'url':'#/ideias',
          'component':'nd-ideias'
        }
   ]
    
 

   /*   let router=new NerdRouter();

      router.add('/','nd-icons');
      router.exec();
  */
   //  this.setState('data',this.seila);
     this.setState('icons',this.home);

 
  }
  render(){
    
  
    return (
      `<div>
        <nav-bar color="black"></nav-bar>
        <nd-view>
          <nd-icons></nd-icons>
        </nd-view>
        
      </div>`
    )
  }

  
  }
  window.suportCustomElements="customElements" in window;
 
  customElements.define('nd-app',Apps);
  
 
      
  
  
  
  
  
  