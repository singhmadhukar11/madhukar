import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.css']
})
export class SocialIconsComponent implements OnInit {
@Input() name: string;
  constructor() { }

  ngOnInit() {
  }

}
