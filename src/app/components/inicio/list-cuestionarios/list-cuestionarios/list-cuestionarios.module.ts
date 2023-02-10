import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//MOdulos
import { ListCuestionariosRoutingModule } from './list-cuestionarios-routing.module';


//Componentes
import { IngresarNombreComponent } from '../ingresar-nombre/ingresar-nombre.component';
import { PreguntaComponent } from '../pregunta/pregunta.component';
import { RespuestaCuestionarioComponent } from '../respuesta-cuestionario/respuesta-cuestionario.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [
    IngresarNombreComponent,
    PreguntaComponent,
    RespuestaCuestionarioComponent
  ],
  imports: [
    CommonModule,
    ListCuestionariosRoutingModule,
    SharedModule
  ],
  exports:[

  ]
})
export class ListCuestionariosModule { }
