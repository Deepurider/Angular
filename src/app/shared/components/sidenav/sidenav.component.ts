import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/core/model/menu';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  public sideMenus!: Menu[];
  public sideBarid = 'side-bar';
  constructor(private menuService: MenuService) {
    this.menuService.getMenu().subscribe((res: any) => {
      this.sideMenus = res;
    });
  }
  ngOnInit() {}
  public onClose() {
    const sideBar = document.getElementById(this.sideBarid);
    if (sideBar) sideBar.style.width = '0';

    const main = document.getElementById('main');
    if (main) main.style.width = '0';
  }
}
