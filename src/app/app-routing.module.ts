import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { RegisterComponent } from './components/inicio/register/register.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent } from './components/inicio/dashboard/dashboard.component';
import { CuestionariosComponent } from './components/inicio/dashboard/cuestionarios/cuestionarios.component';
import { CambiarPasswordComponent } from './components/inicio/dashboard/cambiar-password/cambiar-password.component';
import { NuevoCuestionarioComponent } from './components/inicio/dashboard/cuestionarios/nuevo-cuestionario/nuevo-cuestionario.component';
import { PasoUnoComponent } from './components/inicio/dashboard/cuestionarios/nuevo-cuestionario/paso-uno/paso-uno.component';
import { PasoDosComponent } from './components/inicio/dashboard/cuestionarios/nuevo-cuestionario/paso-dos/paso-dos.component';
import { CuestionarioComponent } from './components/inicio/dashboard/cuestionarios/cuestionario/cuestionario.component';
import { ListCuestionariosComponent } from './components/inicio/list-cuestionarios/list-cuestionarios.component';
import { IngresarNombreComponent } from './components/inicio/list-cuestionarios/ingresar-nombre/ingresar-nombre.component';
import { PreguntaComponent } from './components/inicio/list-cuestionarios/pregunta/pregunta.component';
import { RespuestaCuestionarioComponent } from './components/inicio/list-cuestionarios/respuesta-cuestionario/respuesta-cuestionario.component';
import { EstadisticasComponent } from './components/inicio/dashboard/cuestionarios/estadisticas/estadisticas.component';
import { DetalleRespuestaComponent } from './components/inicio/dashboard/cuestionarios/estadisticas/detalle-respuesta/detalle-respuesta.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  {
    path: 'inicio', component: InicioComponent, children: [
      { path: '', component: BienvenidaComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'listCuestionarios', component: ListCuestionariosComponent },
      { path: 'ingresarNombre', component: IngresarNombreComponent },
      { path: 'pregunta', component: PreguntaComponent },
      { path: 'respuestaCuestionario', component: RespuestaCuestionarioComponent },
    ]
  },
  {
    path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard], children: [
      { path: '', component: CuestionariosComponent },
      { path: 'cambiarPassword', component: CambiarPasswordComponent },
      { path: 'cambiarPassword', component: CambiarPasswordComponent },
      { path: 'verCuestionario/:id', component: CuestionarioComponent },
      { path: 'estadisticas/:id', component: EstadisticasComponent },
      { path: 'detalleRespuesta/:id', component: DetalleRespuestaComponent },
      {
        path: 'nuevoCuestionario', component: NuevoCuestionarioComponent, children: [
          { path: 'pasoUno', component: PasoUnoComponent },
          { path: 'pasoDos', component: PasoDosComponent },
        ]
      },
    ]
  },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
