import { Component, OnInit } from '@angular/core';
import { CuestionarioService } from '../../../../../../services/cuestionario.service';

@Component({
  selector: 'app-paso-dos',
  templateUrl: './paso-dos.component.html',
  styleUrls: ['./paso-dos.component.css']
})
export class PasoDosComponent implements OnInit {
  public tituloCuestionario: string;
  public decsripcionCuestionario: string;

  constructor(private cuestionarioService: CuestionarioService) { }

  ngOnInit(): void {
    this.tituloCuestionario = this.cuestionarioService.tituloCuestionario;
    this.decsripcionCuestionario = this.cuestionarioService.descripcionCuestionario;
  }

}
