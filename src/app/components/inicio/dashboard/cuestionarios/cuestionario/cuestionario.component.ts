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
  public loading:boolean = false;
  public cuestionario:any ={};

  constructor(
    private cuestionarioService:CuestionarioService,
    private aRoute:ActivatedRoute) {
      //Obtenemos el id de la url
      this.idCuestionario = +this.aRoute.snapshot.paramMap.get('id');
     }

  ngOnInit(): void {
    this.getCuestionario();
  }

  //Obtenemos la informacion del cuestionario rescatando de la url el id del cuestionario
  getCuestionario():void{
    this.loading = true;
    this.cuestionarioService.getCuestionario(this.idCuestionario)
    .subscribe(data=>{
      this.loading =false;
      this.cuestionario = data;
      console.log(data);
    })
  }

}
