import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Victor'

  textoPlaceholder ='Escriba algo aqui';
  deshabilitado=true;
  imgSrc='https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg';

  constructor() {
    //setInterval(() => this.nombre = 'Ana', 3000);
    setInterval(() => {
      this.nombre = 'Ana'
      this.deshabilitado =false
    }, 3000);
  }

  getSuma(numero1:number,numero2:number){
    return numero1+numero2;
  }
}
