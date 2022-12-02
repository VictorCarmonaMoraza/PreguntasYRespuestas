import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Pregunta } from 'src/app/models/pregunta';
import { ToastrService } from 'ngx-toastr';

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

}
