import { Component, OnInit } from '@angular/core';
import { PassingDataService } from '../../services/passing-data.service';

@Component({
  selector: 'app-reply-subject',
  templateUrl: './reply-subject.component.html',
  styleUrls: ['./reply-subject.component.css'],
})
export class ReplySubjectComponent implements OnInit {
  public values: any[] = [];

  constructor(public passingDataService: PassingDataService) {}
  ngOnInit(): void {}

  public onStart() {
    setTimeout(() => {
      this.passingDataService.replaySubject$.subscribe((res: any) => {
        this.values.push(res);
      });
    }, 10000);
  }
}
