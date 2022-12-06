import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../../services/login.service';
import { CuestionarioService } from '../../../../services/cuestionario.service';
import { ToastrService } from 'ngx-toastr';
import { Cuestionario } from 'src/app/models/cuestionario';

@Component({
  selector: 'app-cuestionarios',
  templateUrl: './cuestionarios.component.html',
  styleUrls: ['./cuestionarios.component.css']
})
export class CuestionariosComponent implements OnInit {

  public nombreUsuario:string;
  public listCuestionarios:Cuestionario[]=[];
  public loading:boolean = false;

  constructor(
    private loginService:LoginService,
    private cuestionarioService:CuestionarioService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getNombreUsuario();
    this.getCuestionarios();
  }

  getNombreUsuario():void{
    this.nombreUsuario =  this.loginService.getTokendDecoded().sub;
    //console.log(this.loginService.getTokendDecoded());
  }

  getCuestionarios():void{
    this.loading = true;
    this.cuestionarioService.getListCuestionario()
    .subscribe(data=>{
      console.log(data);
      this.listCuestionarios = data;
      this.loading =false;
    }, error=>{
      console.log(error);
      this.loading = false;
    })
  }
}
