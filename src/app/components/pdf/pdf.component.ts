import { Component, OnInit } from '@angular/core';
import { PdfService } from '../../services/pdf.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <label> Pdf src </label>
      <input (change)="onFileSelected()" type="file" id="file">
      <input [(ngModel)]="page" type="text" id="page">
    </div>
    <pdf-viewer [src]="pdfSrc"
      [render-text]="true"
      [page]="page" 
      [show-all]="false"
      style="display: block;">
    </pdf-viewer>
  `,
  styles: [],
  providers: [PdfService]
})
export class PdfComponent implements OnInit {

  page:number = 1;
  pdfSrc:string = '';

  constructor(private pdfService: PdfService) { }

  ngOnInit() {
    this.pdfSrc = this.pdfService.getPDF();
  }

  onFileSelected() {
    let img: any = document.querySelector("#file");

    if(typeof (FileReader) !== 'undefined') {
      let reader = new FileReader();

      reader.onload = (e:any) => {
        this.pdfSrc = e.target.result;
      }

      reader.readAsArrayBuffer(img.files[0]);
    }
  }
}
