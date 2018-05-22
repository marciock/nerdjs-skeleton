import '@webcomponents/custom-elements';
import {Creator} from '../../dist/nerdcreator';
//import {Input} from '../components/tools/Input';

import {NdClick,NdForm} from '../../dist/nerdrouter';

import {NdPost} from '../../dist/nerdhttp';

//import  'whatwg-fetch';
export class NovoUsuario extends Creator{
    
    render(){
        
       let inputs=[
           {
               id:'nome',
               type:'text',
               name:'nome',
               label:'Nome'
           },
           {
            id:'senha',
            type:'password',
            name:'senha',
            label:'Senha'
        }
       ]
        
        return (
            `<div class="container">
                <nd-form id="myForm">
                <div class="row">
                ${
                    inputs.map((f)=>{
                        return (`<div class="row">
                                  <input type="${f.type}" id="${f.id}" name="${f.name}"/> 
                                  <label for="${f.id}">${f.label}</label>
                                  </div>

                        `)
                    }).join('')
                }
              
                  
                    <nd-click function="enviar" >
                      <button id="enviar" type="button" >Salvar</button>
                     </nd-click>
                 
                </nd-form>
                
            </div>
           
            `
           
        )
       
        
 
        
    }
    callBack(){
        const nome=this.tagId('nome');
        let el=this.getElementsByTagName('input');
        let val=[];
        
        this.addEventListener('change',()=>{
            console.log(document.getElementById('nome').value)
        })
        

       
      //  console.log(nome);
        const enviar=()=>{
            alert(nome.getAttribute('value'))
         }
         this.setState('enviar',enviar); 
         
    }
    
   
    
    
   
    
   
}


customElements.define('novo-usuario',NovoUsuario);
/*
 <nd-click f="enviar" >
                       <button id="enviar" type="button" >Salvar</button>
                    </nd-click>
*/