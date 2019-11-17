import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
status = [
{
  "title": "HTML & CSS",
  "percentage": 89
},
{
  "title": "JAVASCRIPT & JQUERY",
  "percentage": 59
},
{
  "title": "ANGULARJS & ANGULAR",
  "percentage": 52
},
{
  "title": "ANGULAR MATERIAL & BOOTSTRAP",
  "percentage": 70
}
];
  ngOnInit() {
  }

}
