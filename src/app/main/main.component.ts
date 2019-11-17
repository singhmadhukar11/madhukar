import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

constructor() {}

  ngOnInit() {
    particlesJS.load('particles-js', 'assets/particlesjs-config.json', null);
  }

}
