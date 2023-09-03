import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [
    HomeContainerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgOptimizedImage
  ]
})
export class HomeModule { }
