import { Component, OnInit } from '@angular/core';
import { CuestionarioService } from '../../../../../../services/cuestionario.service';
import { Pregunta } from '../../../../../../models/pregunta';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Cuestionario } from '../../../../../../models/cuestionario';

@Component({
  selector: 'app-paso-dos',
  templateUrl: './paso-dos.component.html',
  styleUrls: ['./paso-dos.component.css']
})
export class PasoDosComponent implements OnInit {
  public tituloCuestionario: string;
  public decsripcionCuestionario: string;

  public listPreguntas: Pregunta[] = [];
  public loading: boolean = false;

  constructor(private cuestionarioService: CuestionarioService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.tituloCuestionario = this.cuestionarioService.tituloCuestionario;
    this.decsripcionCuestionario = this.cuestionarioService.descripcionCuestionario;
  }

  guardarPregunta(pregunta: Pregunta): void {
    this.listPreguntas.push(pregunta);
    console.log(this.listPreguntas);
  }

  eliminarPregunta(index: number): void {
    //Eliminamos del listado mediante el indice la pregunta
    this.listPreguntas.splice(index, 1);
  }

  guardarCuestionario(): void {
    const cuestionario: Cuestionario = {
      nombre: this.tituloCuestionario,
      descripcion: this.decsripcionCuestionario,
      listPreguntas: this.listPreguntas
    };
    console.log(cuestionario);
    this.loading = true;

    //Enviamos cuestionario al backend
    this.cuestionarioService.guardarCuestionario(cuestionario)
      .subscribe(data => {
        this.toastr.success('El cuestionario fue registrado con exito', 'Cuestionario Registrado');
        this.router.navigate(['/dashboard']);
        this.loading = false;
      }, error => {
        this.toastr.error('Opps... Ocurrio un error!', 'Error');
        this.router.navigate(['/dashboard']);
        this.loading = false;
      })
  }

}
