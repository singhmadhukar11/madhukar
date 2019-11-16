import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }
status = [
{
  "title": "HTML",
  "percentage": 89
},
{
  "title": "CSS",
  "percentage": 84
},
{
  "title": "JAVASCRIPT",
  "percentage": 59
},
{
  "title": "ANGULAR JS",
  "percentage": 52
},
{
  "title": "ANGULAR MATERIAL",
  "percentage": 87
},
{
  "title": "ANGULAR",
  "percentage": 30
},
{
  "title": "BOOTSTRAP",
  "percentage": 68
},
{
  "title": "JQUERY",
  "percentage": 33
},

];
  ngOnInit() {
  }

}
