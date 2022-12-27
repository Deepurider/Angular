import { MenuService } from './core/services/menu.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public sideMenus: any;
  constructor(private menuService: MenuService) {
    this.menuService.getMenu().subscribe((res: any) => {
      console.log(res);
      this.sideMenus = res;
    })
  }

  ngOnInit(): void {
  }
}



