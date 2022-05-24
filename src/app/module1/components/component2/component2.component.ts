import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor(private fs:ServicesService) {}

  ngOnInit() {
    this.fs.messageSource.subscribe((data)=>{
      alert('Hello');
    });
  }

}
