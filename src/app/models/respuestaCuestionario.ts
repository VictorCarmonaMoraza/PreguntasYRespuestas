import { RespuestaCuestionarioDetalle } from './respuestaCuestionarioDetalle';

export class RespuestaCuestionario {
  id?: number;
  cuestionarioId: number;
  nombreParticipante;
  fecha: string;
  listRtaCuestionarioDetalle: RespuestaCuestionarioDetalle[];
}
