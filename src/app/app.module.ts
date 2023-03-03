import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pantalla/login/login.component';
import { TransaccionesComponent } from './Pantalla/transacciones/transacciones.component';
import{ReactiveFormsModule, FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { MockapiService } from './Servicios/api/mockapi.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TransaccionesComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MockapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
