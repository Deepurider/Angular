import { Person, GridColumn } from './../../../../core/model/menu';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent {
  public person: Person[] = [];
  public cols: GridColumn[] = [];
  private callCount = 0;

  constructor() {
    this.person = [
      { id: 1, name: 'Person 1' },
      { id: 2, name: 'Person 2' },
      { id: 3, name: 'Person 3' },
      { id: 4, name: 'Person 4' },
      { id: 5, name: 'Person 5' },
    ];
    this.initiliazation();
  }

  private initiliazation() {
    this.cols = [
      {
        field: 'id',
        header: 'Id',
      },
      {
        field: 'name',
        header: 'Name',
      },
    ];
  }
}
