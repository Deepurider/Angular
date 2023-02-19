import { Component, OnInit } from '@angular/core';
import { PassingDataService } from '../../services/passing-data.service';

@Component({
  selector: 'app-behave-subject',
  templateUrl: './behave-subject.component.html',
  styleUrls: ['./behave-subject.component.css'],
})
export class BehaveSubjectComponent implements OnInit {
  public values: any[] = [];

  constructor(public passingDataService: PassingDataService) {}
  ngOnInit(): void {}

  public onStart() {
    setTimeout(() => {
      this.passingDataService.behaviorSubject$.subscribe((res: any) => {
        this.values.push(res);
      });
    }, 5000);
  }
}
