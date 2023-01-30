import { RespuestaCuestionarioService } from './../../../../../services/respuesta-cuestionario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  idCuestionario: number;

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
    this.respuestaCuestionarioService.getListCuestionarioRespuesta(this.idCuestionario)
      .subscribe(data => {
        console.log(data);
      });
  }

}
