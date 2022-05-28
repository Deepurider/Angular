import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @Output() parentEvent1 = new EventEmitter<string>();
  text!:string
  data!:string;
  constructor(
    public toastr:ToastrService
  ){}
  ngOnInit() {}
  onClick(){
    this.toastr.success(this.text , 'Notification');
  }
}



