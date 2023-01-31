import { RespuestaCuestionarioService } from './../../../../../services/respuesta-cuestionario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RespuestaCuestionario } from '../../../../../models/respuestaCuestionario';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  idCuestionario: number;
  loading: boolean = false;
  listRespuestaCuestionario: RespuestaCuestionario[] = [];

  constructor(
    private aRoute: ActivatedRoute,
    private respuestaCuestionarioService: RespuestaCuestionarioService,
    private toastr: ToastrService
  ) {
    this.idCuestionario = +this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getListCuestionarioService();
  }

  getListCuestionarioService(): void {
    this.loading = true;
    this.respuestaCuestionarioService.getListCuestionarioRespuesta(this.idCuestionario)
      .subscribe(data => {
        this.loading = false;
        this.listRespuestaCuestionario = data;
        console.log('Prueba de datos', data);
      });
  }

  eliminarRespuestaCuestionario(idRtaCuestionario: number): void {
    this.loading = true;
    this.respuestaCuestionarioService.eliminarRespuestaCuestionario(idRtaCuestionario)
      .subscribe(data => {
        this.loading = false;
        this.toastr.info('La respuesta al cuestionario fue eliminada con exito!', 'Resgistro eliminado');
        this.getListCuestionarioService();
      }, error=>{
        this.loading =false;
      })
  }

}
