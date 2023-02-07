import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private myAppUrl: string;
  private myApiUrl: string

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/Login';
  }

  public login(usuario: Usuario): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, usuario);
  }

  //Guardamos el nombre del usaurio
  setLocalStorage(data: string): void {
    localStorage.setItem('token', data);
  }

  //Obtenemos el nombre del usuario
  // getNombreUsuario():string{
  //   return localStorage.getItem('token');
  // }

  getTokendDecoded(): any {
    const helper = new JwtHelperService();

    const decodedToken = helper.decodeToken(localStorage.getItem('token'));
    return decodedToken;
    // const expirationDate = helper.getTokenExpirationDate(myRawToken);
    // const isExpired = helper.isTokenExpired(myRawToken);
  }

  //Borrar LocalStorage
  removeLocalStorage(): void {
    localStorage.removeItem('token');
  }

  getToken():string{
    return localStorage.getItem('token')
  }
}
