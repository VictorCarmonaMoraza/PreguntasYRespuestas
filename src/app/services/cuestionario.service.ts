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

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/Cuestionario';
  }

  guardarCuestionario(cuestionario: Cuestionario): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, cuestionario);
  }
}
