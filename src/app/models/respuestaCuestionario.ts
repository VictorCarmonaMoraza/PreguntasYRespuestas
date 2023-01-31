import { RespuestaCuestionarioDetalle } from './respuestaCuestionarioDetalle';

export class RespuestaCuestionario {
  cuestionarioId: number;
  nombreParticipante;
  fecha:string;
  listRtaCuestionarioDetalle: RespuestaCuestionarioDetalle[];
}
