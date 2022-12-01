import { Component, OnInit } from '@angular/core';
import { CuestionarioService } from '../../../../../../services/cuestionario.service';
import { Pregunta } from '../../../../../../models/pregunta';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paso-dos',
  templateUrl: './paso-dos.component.html',
  styleUrls: ['./paso-dos.component.css']
})
export class PasoDosComponent implements OnInit {
  public tituloCuestionario: string;
  public decsripcionCuestionario: string;

  listPreguntas:Pregunta[]=[];

  constructor(private cuestionarioService: CuestionarioService,
    private toastr:ToastrService,
    private router:Router) { }

  ngOnInit(): void {
    this.tituloCuestionario = this.cuestionarioService.tituloCuestionario;
    this.decsripcionCuestionario = this.cuestionarioService.descripcionCuestionario;
  }

}
