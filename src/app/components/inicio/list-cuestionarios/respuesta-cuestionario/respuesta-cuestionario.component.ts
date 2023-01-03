import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cuestionario } from '../../../../models/cuestionario';
import { RespuestaCuestionarioService } from '../../../../services/respuesta-cuestionario.service';

@Component({
  selector: 'app-respuesta-cuestionario',
  templateUrl: './respuesta-cuestionario.component.html',
  styleUrls: ['./respuesta-cuestionario.component.css']
})
export class RespuestaCuestionarioComponent implements OnInit {

  public cuestionario: Cuestionario;
  public respuestaUsuario: number[] = [];

  constructor(
    private respuestaCuestionarioService: RespuestaCuestionarioService,
    private router: Router) { }

  ngOnInit(): void {
    if(this.respuestaCuestionarioService.idCuestionario ==null){
      this.router.navigate(['/inicio']);
    }
    else{
      this.cuestionario = this.respuestaCuestionarioService.cuestionario;
      this.respuestaUsuario = this.respuestaCuestionarioService.respuestas;
    console.log(this.cuestionario);
    console.log(this.respuestaUsuario);

    }
  }

}
