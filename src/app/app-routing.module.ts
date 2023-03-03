import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pantalla/login/login.component';
import {TransaccionesComponent} from './Pantalla/transacciones/transacciones.component';


const routes: Routes = [
  { path: ' ', redirectTo:'login' , pathMatch:'full'},
  { path:'login', component:LoginComponent},
  { path:'transacciones', component:TransaccionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[ LoginComponent,TransaccionesComponent]
