import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PdfComponent } from './components/pdf/pdf.component';


@NgModule({
  declarations: [
    AppComponent,
    PdfComponent
  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [PdfComponent]
})
export class AppModule { }
