import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css'],
})
export class HomeContainerComponent implements OnInit {
  public imageUrl = environment.production
    ? 'Angular'
    : '' + 'assets/photos/angular-light.png';
  constructor() {}

  ngOnInit(): void {}
}
