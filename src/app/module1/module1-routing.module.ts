import { Component2Component } from './components/component2/component2.component';
import { Component1Component } from './components/component1/component1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'' , component:Component1Component},
  {path:'1' , component:Component2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
