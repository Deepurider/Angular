import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  public menu = undefined;
  public url = environment.production
    ? 'Angular/assets/data/menu.json'
    : 'assets/data/menu.json';
  constructor(private http: HttpClient) {}

  public getMenu() {
    return this.http.get(this.url);
  }
}
