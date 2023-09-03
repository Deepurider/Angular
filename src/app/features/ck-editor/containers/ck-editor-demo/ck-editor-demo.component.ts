import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Config } from '@ckeditor/ckeditor5-utils';

@Component({
  selector: 'app-ck-editor-demo',
  templateUrl: './ck-editor-demo.component.html',
  styleUrls: ['./ck-editor-demo.component.scss'],
})
export class CkEditorDemoComponent {
  public editor = ClassicEditor;
  public config: any = {};
  public modal = {
    data: 'Hello World',
  };

  constructor() {
    this.setConfig();
  }

  public onReady(event: any) {
    console.log(event);
  }

  private setConfig() {
    this.config.toolbar = ['heading'];
  }
}
