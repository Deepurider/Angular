import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CkEditorDemoComponent } from './containers/ck-editor-demo/ck-editor-demo.component';

const routes: Routes = [
  {
    path: '',
    component: CkEditorDemoComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CkEditorRoutingModule {}
