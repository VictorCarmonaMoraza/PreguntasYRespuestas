import { Component, OnInit } from '@angular/core';
import { RespuestaCuestionarioService } from '../../../../services/respuesta-cuestionario.service';
import { CuestionarioService } from '../../../../services/cuestionario.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  public idCuestionario: number;

  constructor(
    private respuestaCuestionarioService: RespuestaCuestionarioService,
    private cuestionarioService: CuestionarioService
  ) { }

  ngOnInit(): void {
    this.idCuestionario = this.respuestaCuestionarioService.idCuestionario;
    //console.log(this.respuestaCuestionarioService.idCuestionario);
    this.getCuestionario();
  }

  //Obtenemos el cuestionario por su id
  getCuestionario(): void {
    this.cuestionarioService.getCuestionario(this.idCuestionario)
      .subscribe(data => {
        console.log(data);
      });
  }

}
