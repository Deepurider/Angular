import { BrowserModule } from '@angular/platform-browser';
import { PrimeNgRoutingModule } from './prime-ng-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgMaterialModule } from 'src/app/shared/module/prime-ng-material.module';
import { PrimeNgContainerComponent } from './containers/prime-ng-container/prime-ng-container.component';
import { QrGenerateComponent } from './components/qr-generate/qr-generate.component';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [PrimeNgContainerComponent, QrGenerateComponent],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgRoutingModule,
    PrimeNgMaterialModule,
    QRCodeModule
  ],
})
export class PrimeNgModule {}
