import { PassingDataService } from './features/subject/services/passing-data.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public sideBarid = 'side-bar';
  public imageUrl = environment.production
    ? 'Angular'
    : '' + 'assets/photos/angular-light.png';
  public assetsUrl = environment.assetsUrl;
  constructor(public passingDataService: PassingDataService) {}

  ngOnInit() {}

  public onOpen() {
    const sideBar = document.getElementById(this.sideBarid);
    if (sideBar) sideBar.style.width = '350px';

    const main = document.getElementById('main');
    if (main) main.style.width = '350px';
  }
}
