import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-generate',
  templateUrl: './qr-generate.component.html',
  styleUrls: ['./qr-generate.component.css'],
})
export class QrGenerateComponent implements OnInit {
  public urlString: string = '';

  ngOnInit(): void {
    console.log('Generate Qr');
  }

  public onGenerate() {
    console.log(this.urlString);
  }
}
