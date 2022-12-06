import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Cuestionario } from '../models/cuestionario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {

  public myAppUrl: string;
  public myApiUrl: string;
  public tituloCuestionario:string;
  public descripcionCuestionario:string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/Cuestionario/';
  }

  //Guarda los cuestionarios
  guardarCuestionario(cuestionario: Cuestionario): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, cuestionario);
  }

  //Obtiene los cuestionarios del usuario
  getListCuestionario():Observable<any>{
    return this.http.get(this.myAppUrl+this.myApiUrl+'GetListCuestionarioByUser');
  }

  //Borramos un cuestionario por su id
  deleteCuestionario(idCuestionario:number):Observable<any>{
    return this.http.delete(this.myAppUrl+this.myApiUrl+idCuestionario);
  }
}
