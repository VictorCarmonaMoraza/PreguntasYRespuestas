import { Injectable } from '@angular/core';
import { Cuestionario } from '../models/cuestionario';

@Injectable({
  providedIn: 'root'
})
export class RespuestaCuestionarioService {

  public nombreParticipante:string;
  public idCuestionario:number;
  public respuestas:number[]=[];
  public cuestionario:Cuestionario;


  constructor() { }
}
