import { ReplySubjectComponent } from './../../components/reply-subject/reply-subject.component';
import { SimpleSubjectComponent } from './../../components/simple-subject/simple-subject.component';
import { BehaveSubjectComponent } from './../../components/behave-subject/behave-subject.component';
import { PassingDataService } from './../../services/passing-data.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-subject-container',
  templateUrl: './subject-container.component.html',
  styleUrls: ['./subject-container.component.css'],
})
export class SubjectContainerComponent implements OnInit {
  @ViewChild('simpleSubject') simpleSub!: SimpleSubjectComponent;
  @ViewChild('behaveSubject') behaveSub!: BehaveSubjectComponent;
  @ViewChild('replaySubject') replaySub!: ReplySubjectComponent;
  public index: number = 1;
  constructor(private passingDataService: PassingDataService) {}
  ngOnInit(): void {}

  public onStart() {
    let id = 0;
    this.simpleSub.onStart();
    this.behaveSub.onStart();
    this.replaySub.onStart();
    const funcId = setInterval(() => {
      id = id + 1;
      this.passingDataService.behaviorSubject$.next(id);
      this.passingDataService.subject$.next(id);
      this.passingDataService.replaySubject$.next(id);
      if (id == 15) {
        clearInterval(funcId);
      }
    }, 1000);
  }
}
