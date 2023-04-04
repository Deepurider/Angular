import { DataTableComponent } from './components/data-table/data-table.component';
import { FullCalendarComponent } from './components/full-calendar/full-calendar.component';
import { QrGenerateComponent } from './components/qr-generate/qr-generate.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DataTableComponent,
  },
  {
    path: 'full-calendar',
    component: FullCalendarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimeNgRoutingModule {}
