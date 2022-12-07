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
  }

  //Obtenemos el cuestionario por su id
  getCuestionario(): void {
    this.loading = true;
    this.cuestionarioService.getCuestionario(this.idCuestionario)
      .subscribe(data => {
        console.log(data);
        this.listPreguntas = data.listPreguntas;
        this.loading = false;
      });
  }

  obtenerPregunta(): string {
    return this.listPreguntas[this.index].descripcion;
  }
  getIndex(): number {
    return this.index;
  }

  respuestaSeleccionada(respuesta: any): void {
    this.opcionSeleccionada = respuesta;
    this.rtaConfirmada = true;
  }

  AddClassOption(respuesta: any): string {
    if (respuesta == this.opcionSeleccionada) {
      return 'active text-light';
    }
  }

  siguiente(): void {
    this.rtaConfirmada = false;
    this.index++;
  }

}
