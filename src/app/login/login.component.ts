import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AdminService } from './admin.service';
import { admin } from './admin';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@Input() admin: admin;
 
  constructor(private adminService: AdminService) { }
	userName;
	Password;

	signIn(data) {
    // this.adminService.createCustomer(data);
  }


  ngOnInit() {
  }

}




