import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RespuestaCuestionarioService } from '../../../../services/respuesta-cuestionario.service';

@Component({
  selector: 'app-ingresar-nombre',
  templateUrl: './ingresar-nombre.component.html',
  styleUrls: ['./ingresar-nombre.component.css']
})
export class IngresarNombreComponent implements OnInit {

  public nombreParticipante: string = '';

  constructor(
    private router: Router,
    private respuestaCuestionarioService: RespuestaCuestionarioService
  ) { }

  ngOnInit(): void {
    if(this.respuestaCuestionarioService.idCuestionario == null){
      this.router.navigate(['/inicio']);
    }
  }

  siguiente(): void {
    //Seteamos en el servicio el nombre del participante
    this.respuestaCuestionarioService.nombreParticipante = this.nombreParticipante;
    //Redireccion
    this.router.navigate(['/inicio/pregunta']);
  }

}
