import { BrowserModule } from '@angular/platform-browser';
import { PrimeNgRoutingModule } from './prime-ng-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgMaterialModule } from 'src/app/shared/module/prime-ng-material.module';
import { PrimeNgContainerComponent } from './containers/prime-ng-container/prime-ng-container.component';
import { QrGenerateComponent } from './components/qr-generate/qr-generate.component';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { FullCalendarComponent } from './components/full-calendar/full-calendar.component';
import { TabViewModule} from 'primeng/tabview';
import {FullCalendarModule} from '@fullcalendar/angular';
import { DataTableComponent } from './components/data-table/data-table.component';


@NgModule({
  declarations: [PrimeNgContainerComponent, QrGenerateComponent, FullCalendarComponent, DataTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgRoutingModule,
    PrimeNgMaterialModule,
    QRCodeModule,
    TabViewModule,
    FullCalendarModule
  ],
})
export class PrimeNgModule {}
