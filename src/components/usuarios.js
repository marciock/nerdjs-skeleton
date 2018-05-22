import '@webcomponents/custom-elements';
import {Creator} from '../../dist/nerdcreator';
import TableView from '../components/tools/TableView';
import Fab from '../components/tools/Fab';
import {NdGet} from '../../dist/nerdhttp';
//import  'whatwg-fetch';
export class Usuarios extends Creator{
    constructor(){
        super();
       
    }
    render(){
    
      let request=new NdGet('http://localhost/ggnomotor/modules/usuarios/services/Lista.php');


     //   console.log(request.show());

     

        const head=[{'head':'Chave'},{'head':'Nome'},{'head':'ip'}];

        this.setState('table',head);
        this.setState('results',request.show());        

        return (
            `<div class="container">
                <table-view >                    
                </table-view>
                <nd-fab></nd-fab>

            </div>
            `
        )
    }
}

customElements.define('nd-usuarios',Usuarios);
