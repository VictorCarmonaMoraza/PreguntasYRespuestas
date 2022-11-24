import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RegisterComponent } from './components/inicio/register/register.component';
import { DashboardComponent } from './components/inicio/dashboard/dashboard.component';
import { CambiarPasswordComponent } from './components/inicio/dashboard/cambiar-password/cambiar-password.component';
import { CuestionariosComponent } from './components/inicio/dashboard/cuestionarios/cuestionarios.component';
import { NavbarComponent } from './components/inicio/dashboard/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoadingComponent } from './shared/loading/loading.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NuevoCuestionarioComponent } from './components/inicio/dashboard/cuestionarios/nuevo-cuestionario/nuevo-cuestionario.component';

//Interceptors
import { AddTokenInterceptor } from './helpers/add-token.interceptor';
import { PasoUnoComponent } from './components/inicio/dashboard/cuestionarios/nuevo-cuestionario/paso-uno/paso-uno.component';
import { PasoDosComponent } from './components/inicio/dashboard/cuestionarios/nuevo-cuestionario/paso-dos/paso-dos.component';
import { NuevaPreguntaComponent } from './components/inicio/dashboard/cuestionarios/nuevo-cuestionario/paso-dos/nueva-pregunta/nueva-pregunta.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BienvenidaComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CambiarPasswordComponent,
    CuestionariosComponent,
    NavbarComponent,
    LoadingComponent,
    NuevoCuestionarioComponent,
    PasoUnoComponent,
    PasoDosComponent,
    NuevaPreguntaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
