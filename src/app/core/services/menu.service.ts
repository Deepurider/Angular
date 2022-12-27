import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public menu = undefined;
  constructor(private http: HttpClient) {
  }

  public getMenu() {
    return this.http.get('../../../Angular/assets/data/menu.json');
  }
}
