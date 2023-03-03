import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pantalla/login/login.component';
import { TransaccionesComponent } from './Pantalla/transacciones/transacciones.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TransaccionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
