import {Component} from '@angular/core';
import {DocumentScanner, DocumentScannerOptions} from '@ionic-native/document-scanner/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data: any;

  constructor(private documentScanner: DocumentScanner) {
  }

  openSccanner() {
    const opts: DocumentScannerOptions = {};
    this.documentScanner.scanDoc(opts)
      .then((res: string) => {
        console.log(res);
        this.data = res;
      })
      .catch((error: any) => console.error(error));
  }
}
