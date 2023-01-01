import { MenuService } from './core/services/menu.service';
import { Component, OnInit} from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public sideMenus: any;
  public assetsUrl = environment.assetsUrl;
  constructor(private menuService: MenuService) {
    this.menuService.getMenu().subscribe((res: any) => {
      this.sideMenus = res;
    });
  }

  ngOnInit(): void {}
}
