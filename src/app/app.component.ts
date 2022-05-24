import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';

  public colDefs:ColDef[] = [
    {headerName:'username' , field:'username'},
    {headerName:'password' , field:'password'},
    {headerName:'email' , field:'email'}
  ]

  public rows = [
    {username:'Deepurider1' , password:'deep@123' , email:'pateldeep691996@gmail.com'},
    {username:'Deepurider1' , password:'deep@123' , email:'pateldeep691996@gmail.com'},
    {username:'Deepurider1' , password:'deep@123' , email:'pateldeep691996@gmail.com'},
  ]
}
