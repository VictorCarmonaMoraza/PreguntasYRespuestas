import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuestionarioService } from '../../../../../services/cuestionario.service';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent implements OnInit {

  public idCuestionario:number;

  constructor(
    private cuestionarioService:CuestionarioService,
    private aRoute:ActivatedRoute) {
      //Obtenemos el id de la url
      this.idCuestionario = +this.aRoute.snapshot.paramMap.get('id');
     }

  ngOnInit(): void {
    this.getCuestionario();
  }

  getCuestionario():void{
    this.cuestionarioService.getCuestionario(this.idCuestionario)
    .subscribe(data=>{
      console.log(data);
    })
  }

}
