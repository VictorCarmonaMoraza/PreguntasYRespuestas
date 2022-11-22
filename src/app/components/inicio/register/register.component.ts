import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService
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

    //LLamada al servicio
    this.usuarioService.saveUser(usuario)
    .subscribe(data=>{
      console.log(data);
    })
  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls['password'].value;
    const confirmPass = group.controls['confirmPassword'].value;
    return pass === confirmPass ? null : { notSame: true };
  }

}
