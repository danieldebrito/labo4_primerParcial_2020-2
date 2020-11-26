import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/paises/class/pais';
import { PaisesService } from 'src/app/paises/services/paises.service';

@Component({
  selector: 'app-paises-listado',
  templateUrl: './paises-listado.component.html',
  styleUrls: ['./paises-listado.component.css']
})
export class PaisesListadoComponent implements OnInit {

  public paises: Pais[] = [];
  public pais: Pais = {};

  constructor(
    private paisesService: PaisesService,
  ) { }


  public getPaises() {
    this.paisesService.ListarO().subscribe(response => {
        this.paises = response;
    });
  }


  public mostrarPais(event) {
    this.pais = event.paisEnviado;
  }

  ngOnInit() {
    this.getPaises();
  }
}








  /*
  public getPaises() {
    this.paisesService.ListarO().subscribe(response => {
      this.paisesFireServ.getItems().subscribe(reponseFire => {
        // console.log(reponseFire);
        const right = [];
        // Recorres ambos arreglos y aplicas la condición que deseas
        response.filter((d) => {
          reponseFire.filter((s) => {
            if (d.name === s.name && s.habilitado === 0) {
              right.push(d);
            }
          });
        });

        // Una vez obtenidos los registros correctos, puedes filtrar nuevamente el arreglo omitiendo los mismos
        this.paises = response.filter(d => !right.includes(d));
        // console.log(right);
        // console.log(wrong);
      });
    });
  }

  public deletePais(event) {
    const pais: Pais = {};

    pais.name = event.paisDeshabilitado.name;
    pais.habilitado = 0;

    this.paisesFireServ.addItem(pais);
    this.pais = {};
  }
*/
