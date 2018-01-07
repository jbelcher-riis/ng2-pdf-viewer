import { Injectable } from '@angular/core';

@Injectable()
export class PdfService {

  constructor() { }

  getPDF():string {
    return '/assets/demo.pdf';
  }
}
