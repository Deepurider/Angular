import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor(private fs:ServicesService) {}

  ngOnInit(): void {
    // this.fs.messageSource.subscribe((data)=>{
    //   console.log(data);
    // });
  }

  onClick(){
    this.fs.getSend('Hello World');
  }

}
