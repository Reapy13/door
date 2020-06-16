import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../services/header.service';

@Component({
    selector: 'app-head-banner',
    templateUrl: './head-banner.component.html',
    styleUrls: ['./head-banner.component.css']
})
export class HeadBannerComponent implements OnInit {

    labels: Array<string> = ['Accueil',
        'Nos Résultats',
        'Contact',
        'Nos Prestations',
        'Honoraires',
        'Actualité',
        'Publications',
        'Glossaire',
        'FAQ'];

    constructor(private headerService: HeaderService) { }

    ngOnInit() { }

    clickLabel(label: string) {
        this.headerService.changeHomePage(label);
    }
}
