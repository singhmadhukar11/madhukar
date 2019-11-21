import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { UinterfaceComponent } from './uinterface/uinterface.component';


const routes: Routes = [
{ path: '', component: LoginComponent },
{ path: 'uinterface', component: UinterfaceComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
