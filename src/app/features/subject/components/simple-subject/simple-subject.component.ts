import { PassingDataService } from './../../services/passing-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-subject',
  templateUrl: './simple-subject.component.html',
  styleUrls: ['./simple-subject.component.css'],
})
export class SimpleSubjectComponent implements OnInit {
  public values: any[] = [];

  constructor(public passingDataService: PassingDataService) {}
  ngOnInit(): void {
  }

  public onStart(){
    this.passingDataService.subject$.subscribe((res: any) => {
      this.values.push(res);
    });
  }
}
