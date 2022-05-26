import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    public toastr:ToastrService
  ){}
  ngOnInit() {
    setTimeout(() => {
      this.toastr.success('After 10 second' , 'status');
    }, 10000);
  }
}
