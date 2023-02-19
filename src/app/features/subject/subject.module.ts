import { PassingDataService } from './services/passing-data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectContainerComponent } from './containers/subject-container/subject-container.component';
import { SubjectRoutingModule } from './subject-routing.module';
import { SimpleSubjectComponent } from './components/simple-subject/simple-subject.component';
import { BehaveSubjectComponent } from './components/behave-subject/behave-subject.component';
import { ReplySubjectComponent } from './components/reply-subject/reply-subject.component';
import { AsycSubjectComponent } from './components/asyc-subject/asyc-subject.component';

@NgModule({
  declarations: [
    SubjectContainerComponent,
    SimpleSubjectComponent,
    BehaveSubjectComponent,
    ReplySubjectComponent,
    AsycSubjectComponent,
  ],
  imports: [CommonModule, SubjectRoutingModule],
  providers: [],
})
export class SubjectModule {}
