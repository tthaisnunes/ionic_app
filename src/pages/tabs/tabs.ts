import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  url;
  constructor(
    private _sanitizer: DomSanitizer
  ) {
    this.url = this._sanitizer.bypassSecurityTrustResourceUrl('http://servicedesk.optmize.com.br');
  }
}
