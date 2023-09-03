import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CkEditorRoutingModule } from './ck-editor-routing.module';
import { CkEditorDemoComponent } from './containers/ck-editor-demo/ck-editor-demo.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CkEditorDemoComponent],
  imports: [CommonModule, CkEditorRoutingModule, CKEditorModule,FormsModule],
})
export class CkEditorDemoModule {}
