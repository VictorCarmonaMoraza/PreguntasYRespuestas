import { Component, OnInit } from '@angular/core';
import { RespuestaCuestionarioService } from '../../../../services/respuesta-cuestionario.service';
import { CuestionarioService } from '../../../../services/cuestionario.service';
import { Router } from '@angular/router';
import { Pregunta } from '../../../../models/pregunta';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  public idCuestionario: number;
  public listPreguntas: Pregunta[] = [];
  public loading: boolean = false;
  public rtaConfirmada: boolean = false;
  public opcionSeleccionada: any;
  public index: number = 0;
  public idRespuestaSeleccionada: number;

  constructor(
    private respuestaCuestionarioService: RespuestaCuestionarioService,
    private cuestionarioService: CuestionarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.idCuestionario = this.respuestaCuestionarioService.idCuestionario;
    if (this.idCuestionario == null) {
      this.router.navigate(['/inicio']);
      return;
    }
    this.getCuestionario();
    //Cuando entramos el array de respuestas debe estar vacio
    this.respuestaCuestionarioService.respuestas = [];
  }

  //Obtenemos el cuestionario por su id
  getCuestionario(): void {
    this.loading = true;
    this.cuestionarioService.getCuestionario(this.idCuestionario)
      .subscribe(data => {
        console.log(data);
        this.listPreguntas = data.listPreguntas;
        this.loading = false;
        this.respuestaCuestionarioService.cuestionario = data;
      });
  }

  obtenerPregunta(): string {
    return this.listPreguntas[this.index].descripcion;
  }
  getIndex(): number {
    return this.index;
  }

  respuestaSeleccionada(respuesta: any, idRespuesta: number): void {
    this.opcionSeleccionada = respuesta;
    this.rtaConfirmada = true;
    this.idRespuestaSeleccionada = idRespuesta;
  }

  AddClassOption(respuesta: any): string {
    if (respuesta == this.opcionSeleccionada) {
      return 'active text-light';
    }
  }

  siguiente(): void {
    this.respuestaCuestionarioService.respuestas.push(this.idRespuestaSeleccionada);
    console.log(this.respuestaCuestionarioService.respuestas);
    this.rtaConfirmada = false;
    this.index++;
    this.idRespuestaSeleccionada = null;

    if (this.index === this.listPreguntas.length) {
      this.router.navigate(['/inicio/respuestaCuestionario']);
    }
  }

}
