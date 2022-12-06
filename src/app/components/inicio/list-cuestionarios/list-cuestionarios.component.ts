import { Component, OnInit } from '@angular/core';
import { Cuestionario } from 'src/app/models/cuestionario';
import { CuestionarioService } from '../../../services/cuestionario.service';
import { Router } from '@angular/router';
import { RespuestaCuestionarioService } from '../../../services/respuesta-cuestionario.service';

@Component({
  selector: 'app-list-cuestionarios',
  templateUrl: './list-cuestionarios.component.html',
  styleUrls: ['./list-cuestionarios.component.css']
})
export class ListCuestionariosComponent implements OnInit {

  public loading: boolean = false;
  listCuestionarios: any[] = [];

  constructor(
    private cuestionarioService: CuestionarioService,
    private router:Router,
    private respuestaCuestionarioService:RespuestaCuestionarioService
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

  ingresarNombre(idCuestionario:number):void{
    //LLamamos al servicio
    this.respuestaCuestionarioService.idCuestionario = idCuestionario;
    //Redireccionamos
    this.router.navigate(['/inicio/ingresarNombre']);
  }
}
