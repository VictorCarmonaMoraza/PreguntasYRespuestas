import { Component, OnInit } from '@angular/core';
import { CuestionarioService } from '../../../services/cuestionario.service';

@Component({
  selector: 'app-list-cuestionarios',
  templateUrl: './list-cuestionarios.component.html',
  styleUrls: ['./list-cuestionarios.component.css']
})
export class ListCuestionariosComponent implements OnInit {

  constructor(
    private cuestionarioService: CuestionarioService
  ) { }

  ngOnInit(): void {
    //Cuando carga el componente debe cargar todos los cuestionarios
    this.getListCuestionarios();
  }

  //Retornamos todos los cuestionarios
  getListCuestionarios(): void {
    this.cuestionarioService.getListCuestionarios()
      .subscribe(data => {
        console.log(data);
      })
    }
  }
