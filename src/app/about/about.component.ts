import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

constructor() { }

rhsSide = [
{
"title": "ABOUT ME",
"description": "I'm a UI developer with 2+ years of professional experience In INNOEYE TECHNOLOGY PVT LTD, based in Indore."
},
{
"title" : "Experience",
"description": "August 2017  –  Present, I joined InnoEye technologies as Fresher in Indore as a UI Developer and moved to AngularJS development with version 1.x on multiple Modules. I’ve also got a chance to explore multiple libraries such as AG-Grid, Angular Material, HighCharts among others."
},
{
"title" : "Projects",
"description": "ForeSight: Foresight is a real time analytics platform, which leverages and co-relates data from multiple sources, hence enabling discovery and valuable insights about end-to-end Network."
},
{
"title" : "Skills",
"description": "HTML 5/CSS, Angular Material / Angular Material 2, Bootstrap, Responsive Design, JavaScript, Angular JS, Basic Knowledge of Angular 8, JSON, AG-Grid, High Chart "
}

]
  
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
