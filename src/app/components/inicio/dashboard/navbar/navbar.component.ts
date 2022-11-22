import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  logOut(): void {
    //Borramos el localStorage
    this.loginService.removeLocalStorage();
    //Redirigimos hacia el inicio
    this.router.navigate(['/inicio']);
  }

}
