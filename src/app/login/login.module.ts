import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { UinterfaceComponent } from './uinterface/uinterface.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';


@NgModule({
  declarations: [LoginComponent, UinterfaceComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
   AngularFirestoreModule
  ]
})
export class LoginModule { }



