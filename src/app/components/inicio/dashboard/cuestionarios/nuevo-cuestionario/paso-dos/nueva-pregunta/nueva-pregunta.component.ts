import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Pregunta } from 'src/app/models/pregunta';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from '../../../../../../../models/respuesta';

@Component({
  selector: 'app-nueva-pregunta',
  templateUrl: './nueva-pregunta.component.html',
  styleUrls: ['./nueva-pregunta.component.css']
})
export class NuevaPreguntaComponent implements OnInit {

  public nuevaPregunta: FormGroup;
  pregunta: Pregunta;
  rtaCorrecta = 0;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService) {
    this.nuevaPregunta = this.fb.group({
      titulo: ['', Validators.required],
      respuestas: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.agregarRespuestasPorDefecto();
  }

  //Devuelve array de respuestas
  get getRespuestas(): FormArray {
    return this.nuevaPregunta.get('respuestas') as FormArray
  }

  //Agregar respuestas al array
  agregarRespuestas(): void {
    this.getRespuestas.push(this.fb.group({
      descripcion: ['', Validators.required],
      esCorrecta: 0
    }))
  }

  agregarRespuestasPorDefecto(): void {
    this.agregarRespuestas();
    this.agregarRespuestas();
  }

  eliminarRespuesta(index: number): void {
    if (this.getRespuestas.length === 2) {
      this.toastr.error('Como minimo la pregunta debe contener 2 respuestas', 'Error!');
    } else {
      this.getRespuestas.removeAt(index);
    }
  }

  setRespuestaValida(index: number): void {
    this.rtaCorrecta = index;
  }

  agregarPregunta(): void {
    //Obtener titulo de la pregunta
    const descripcionPregunta = this.nuevaPregunta.get('titulo').value;

    //Obtener array de respuestas
    const arrayRespuestas = this.nuevaPregunta.get('respuestas').value;

    //Creamos un array de respuestas
    const arrayRta: Respuesta[] = [];


    //Iteramos el array de respuestas
    arrayRespuestas.forEach((element,index) => {
      const respuesta: Respuesta = new Respuesta(element.descripcion, false);
      if(index===element.esCorrecta){
        respuesta.esCorrecta =true;
      }

      //Insertamos dentro del array de respuestas la respuesta
      arrayRta.push(respuesta);
    });

    const pregunta:Pregunta=new Pregunta(descripcionPregunta,arrayRta);

    console.log(pregunta);
    this.reset();
  }

  //Reseteamos el formulario
  reset():void{
    this.nuevaPregunta.reset();
    this.getRespuestas.clear();
    this.agregarRespuestasPorDefecto();
  }
}
