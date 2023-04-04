import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AngularElementComponent } from './components/angular-element/angular-element.component';

const routes: Routes = [
  {path:'',component:AngularElementComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularElementRoutingModule {}
