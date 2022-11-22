import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from '../../../services/usuario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.register = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['']
    }, { validator: this.checkPassword });
  }

  ngOnInit(): void {
  }

  registrarUsuario(): void {
    console.log(this.register);

    const usuario: Usuario = {
      nombreUsuario: this.register.value.usuario,
      password: this.register.value.password
    }

    //Cargamos el loading
    this.loading = true;

    //LLamada al servicio
    this.usuarioService.saveUser(usuario)
      .subscribe(data => {
        console.log(data);
        this.toastr.success('El usuario ' + usuario.nombreUsuario + ' fue registrado con exito!', 'Usuario Registrado');
        //Redirigimos a la pagina de login
        this.router.navigate(['/inicio/login']);
        //Paramos el loading
        this.loading = false;
      }, error => {
        //Paramos el loading
        this.loading = false;
        //Imprimo el error
        console.log(error);
        //Mostramos el mensaje en el toast
        this.toastr.error(error.error.message, 'Error!');
        //Reseteamos el formulario
        this.register.reset();
      });

  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls['password'].value;
    const confirmPass = group.controls['confirmPassword'].value;
    return pass === confirmPass ? null : { notSame: true };
  }

}
