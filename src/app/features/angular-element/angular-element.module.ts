import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularElementComponent } from './components/angular-element/angular-element.component';
import { AngularElementRoutingModule } from './angular-element-routing.module';
import { MyPopupComponent } from './components/my-popup/my-popup.component';



@NgModule({
  declarations: [
    AngularElementComponent,
    MyPopupComponent
  ],
  imports: [
    CommonModule,
    AngularElementRoutingModule
  ]
})
export class AngularElementModule { }
