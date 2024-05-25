import { Component} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SeleccionCategoriaService } from '../seleccion-categoria.service';

@Component({
    selector: 'app-pagina-principal',
    standalone: true,
    templateUrl: './pagina-principal.component.html',
    styleUrl: './pagina-principal.component.css',
    imports: [RouterOutlet, RouterLink]
})
export class PaginaPrincipalComponent{

    constructor(private seleccionCategoria: SeleccionCategoriaService){
      
    }

    guardarSeleccion(dato : string){
        this.seleccionCategoria.changeMessage(dato);
      }
}
