import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  login: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
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
    if (usuario.nombreUsuario === 'victor' && usuario.password === '1234') {
      this.login.reset();
      this.router.navigate(['/dashboard']);
    } else {
      this.toastr.error('Usuario o contraseña incorrecto', 'Error');
      this.login.reset();
    }
    console.log(usuario);
  }

}
