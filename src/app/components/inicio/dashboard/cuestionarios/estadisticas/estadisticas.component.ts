import { RespuestaCuestionarioService } from './../../../../../services/respuesta-cuestionario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RespuestaCuestionario } from '../../../../../models/respuestaCuestionario';

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

}
