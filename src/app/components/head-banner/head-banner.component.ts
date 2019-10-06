import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head-banner',
  templateUrl: './head-banner.component.html',
  styleUrls: ['./head-banner.component.css']
})
export class HeadBannerComponent implements OnInit {

  private labels: Array<string> = ['Accueil',
    'Nos Résultats',
    'Contact',
    'Nos Prestations',
    'Honoraires',
    'Actualité',
    'Publications',
    'Glossaire',
    'FAQ'];

  constructor() {  }

  ngOnInit() {  }

  logLabel(label: string) {
    console.log('Message : ' + label);
  }
}
