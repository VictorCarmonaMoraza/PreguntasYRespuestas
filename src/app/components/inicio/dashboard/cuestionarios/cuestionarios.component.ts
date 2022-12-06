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

  public nombreUsuario: string;
  public listCuestionarios: Cuestionario[] = [];
  public loading: boolean = false;

  constructor(
    private loginService: LoginService,
    private cuestionarioService: CuestionarioService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getNombreUsuario();
    this.getCuestionarios();
  }

  getNombreUsuario(): void {
    this.nombreUsuario = this.loginService.getTokendDecoded().sub;
    //console.log(this.loginService.getTokendDecoded());
  }

  getCuestionarios(): void {
    this.loading = true;
    this.cuestionarioService.getListCuestionario()
      .subscribe(data => {
        console.log(data);
        this.listCuestionarios = data;
        this.loading = false;
      }, error => {
        console.log(error);
        this.loading = false;
        this.toastr.error('Opss.. ocurrio un error','Error');
      })
  }

  eliminarCuestionario(idCuestionario: number): void {
    if (confirm('Estas seguro que deseas eliminar el cuestionario?')) {
      this.loading = true;
      this.cuestionarioService.deleteCuestionario(idCuestionario)
        .subscribe(data => {
          this.loading = false;
          this.toastr.success('El cuestionario fue eliminado con exito!', 'Registro eliminado');
          //Recargamos el listado de cuestionarios despues de borrar
          this.getCuestionarios();
        }, error=>{
          this.loading =  false;
          this.toastr.error('Opss.. ocurrio un error','Error');
        })
    }
  }
}
