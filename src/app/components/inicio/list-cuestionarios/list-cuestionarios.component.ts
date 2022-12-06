import { Component, OnInit } from '@angular/core';
import { Cuestionario } from 'src/app/models/cuestionario';
import { CuestionarioService } from '../../../services/cuestionario.service';

@Component({
  selector: 'app-list-cuestionarios',
  templateUrl: './list-cuestionarios.component.html',
  styleUrls: ['./list-cuestionarios.component.css']
})
export class ListCuestionariosComponent implements OnInit {

  public loading :boolean =false;
  listCuestionarios:any[] =[];

  constructor(
    private cuestionarioService: CuestionarioService
  ) { }

  ngOnInit(): void {
    //Cuando carga el componente debe cargar todos los cuestionarios
    this.getListCuestionarios();
  }

  //Retornamos todos los cuestionarios
  getListCuestionarios(): void {
    this.loading = true;
    this.cuestionarioService.getListCuestionarios()
      .subscribe(data => {
        console.log(data);
        this.loading = false;
        this.listCuestionarios = data;
      })
    }
  }
