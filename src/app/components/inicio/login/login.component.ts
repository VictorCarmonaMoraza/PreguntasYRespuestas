import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../../../models/usuario';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;

  login: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private loginService: LoginService
  ) {
    this.login = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  log() {
    console.log(this.login);

    const usuario: Usuario = {
      //Seteamos los valores obtenidos del formulario
      nombreUsuario: this.login.value.usuario,
      password: this.login.value.password
    }
    this.loading = true;
    this.loginService.login(usuario)
      .subscribe(data => {
        console.log(data);
        //Paramos el loading
        this.loading = false;
        //Guardamos en el localStorage el nombre del usuario
        this.loginService.setLocalStorage(data.usuario);
        //Retornamos hacia el dashboar porque todo fue bien
        this.router.navigate(['/dashboard']);
      }, error => {
        //Imprimos el error
        console.log(error);
        //Paramos el loading
        this.loading = false;
        //Mostramos el mesnaje de error
        this.toastr.error(error.error.message, 'Error');
        //Reseteamos el formulario
        this.login.reset();
      })
    // setTimeout(() => {
    //   if (usuario.nombreUsuario === 'victor' && usuario.password === '1234') {
    //     this.login.reset();
    //     this.router.navigate(['/dashboard']);
    //   } else {
    //     this.toastr.error('Usuario o contraseña incorrecto', 'Error');
    //     this.login.reset();
    //   }
    //   this.loading = false;
    // }, 3000)

    // console.log(usuario);
  }

}
