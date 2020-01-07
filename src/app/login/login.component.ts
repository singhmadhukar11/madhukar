import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AdminService } from './admin.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { admin } from './admin';
import { Observable } from 'rxjs';
import { User, Company } from '../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@Input() admin: admin;
 
  constructor(private adminService: AdminService, private afs: AngularFirestore) { }
	userName;
	Password;

  _users: Observable<User[]>;

	signIn(data) {
    // this.adminService.createCustomer(data);
  }


  ngOnInit() {

     this._users = this.afs.collection('users').valueChanges();
  }

}




