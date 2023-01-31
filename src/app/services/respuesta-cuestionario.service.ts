import { Injectable } from '@angular/core';
import { Cuestionario } from '../models/cuestionario';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { RespuestaCuestionario } from '../models/respuestaCuestionario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RespuestaCuestionarioService {

  myAppUrl: string;
  myApiUrl: string;

  public nombreParticipante: string;
  public idCuestionario: number;
  public respuestas: number[] = [];
  public cuestionario: Cuestionario;


  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/RespuestaCuestionario/';
  }

  guardarRespuestaCuestionario(respuestaCuestionario: RespuestaCuestionario): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, respuestaCuestionario);
  }

  getListCuestionarioRespuesta(idCuestionario: number): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl + idCuestionario);
  }

  eliminarRespuestaCuestionario(idRespuestaCuestionario: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + idRespuestaCuestionario);
  }
}
