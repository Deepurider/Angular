import { Component } from '@angular/core';

@Component({
  selector: 'app-prime-ng-container',
  templateUrl: './prime-ng-container.component.html',
  styleUrls: ['./prime-ng-container.component.css'],
})
export class PrimeNgContainerComponent {
  public cols: any[] = [
    { field: 'Id', header: 'ID' },
    { field: 'Name', header: 'NAME' },
    { field: 'Class', header: 'CLASS' },
  ];
  public array: any[] = [
    { Id: 1, Name: 'Name 1', Class: 'Class 1' },
    { Id: 2, Name: 'Name 2', Class: 'Class 2' },
    { Id: 3, Name: 'Name 3', Class: 'Class 3' },
    { Id: 4, Name: 'Name 4', Class: 'Class 4' },
    { Id: 5, Name: 'Name 5', Class: 'Class 5' },
    { Id: 6, Name: 'Name 6', Class: 'Class 6' },
    { Id: 7, Name: 'Name 7', Class: 'Class 7' },
    { Id: 8, Name: 'Name 8', Class: 'Class 8' },
    { Id: 9, Name: 'Name 9', Class: 'Class 9' },
  ];
  constructor() {}
}
