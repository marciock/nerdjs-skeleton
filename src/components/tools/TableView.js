import '@webcomponents/custom-elements';
import {Creator} from '../../../dist/nerdcreator';

export class TableView extends Creator{
    
    render(){
        const myData= this.state.results;
     //   console.log(myData);
        return (

           

            `<div class="row">
            <table>
            <thead>
            <tr>
                ${
                    this.state.table.map(f=>{
                        return (`
                            <th>${f.head}</th>
                        `)
                    }).join('')
                }
                
                
            </tr>
            </thead>

            <tbody>
               
            ${
              

               myData.map((f)=>{
                   return(`
                        <tr>
                            <td>${f.id_usuarios}</td>
                            <td>${f.nome}</td>
                            <td>${f.ip}</td>
                        </tr>
                   `)
               }).join('')
            }
           
            </tbody>
        </table>
            </div>
            `
        )
    }
}

customElements.define('table-view',TableView);
  