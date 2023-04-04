import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private pageTitle: Title
  ) {
    this.getRouteData();
  }

  private getRouteData() {
    this.activatedRoute.data.subscribe((data: any) => {
      console.log(data);
      this.pageTitle.setTitle(data.pageTitle);
    });
  }
}
