import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  standalone: true,
  imports: [],
  templateUrl: './form-search.component.html',
  styleUrl: './form-search.component.css'
})
export class FormSearchComponent {

  constructor(private router:Router){}


  //ESTE ES UN METODO QUE RECOGE EL VALOR DEL IMPUT Y LO ENVIA ATRAVES DE QUERY A OTRO CONPONENTE.

  // 1 - USAMOS UN IF PARA VER SI LA INFORMACION DEL INPUT EN CORRECTA Y CUANDO
  // SEA MAYOR A 3 COMIENSE A MANDAR LOS DATOS. 

  // 2 - INPORTAR EN EL CONSTRUCTOR EN METODO ROUTER Y LLAMAR SU METODO NAVIGATE Y
  // PONER A QUE CONPONETE QUIERO ENVIAR LOS DATOS. 

  // 3 - POR ULTIMO LLAMAMOS LA PROPIEDAD queryParams Y LE DAMOS UN DONDE A UNA VARIABLE Y LE ASIGNAMOS
  // EL VALOR DEL IMPUT.
  
  onSearch(value:String){
      if(value && value.length > 3){
          this.router.navigate(['/character-list'],{
            queryParams:{q:value}
          })
      }
  }
}
