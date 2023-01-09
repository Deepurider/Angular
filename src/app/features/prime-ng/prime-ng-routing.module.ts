import { QrGenerateComponent } from './components/qr-generate/qr-generate.component';
import { PrimeNgContainerComponent } from './containers/prime-ng-container/prime-ng-container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: QrGenerateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimeNgRoutingModule {}
