import { SubjectModule } from './features/subject/subject.module';
import { PassingDataService } from './features/subject/services/passing-data.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { MatMaterialModule } from './shared/module/mat-material.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { VoiceRecorderComponent } from './features/voice-recorder/voice-recorder.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, VoiceRecorderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    MatMaterialModule,
  ],
  providers: [PassingDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
