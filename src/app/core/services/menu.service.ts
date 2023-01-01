import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  public menu = undefined;
  constructor(private http: HttpClient) {}

  public getMenu() {
    return this.http.get(`assets/data/menu.json`);
  }
}
