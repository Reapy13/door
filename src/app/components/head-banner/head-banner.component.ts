import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../services/header.service';

@Component({
    selector: 'app-head-banner',
    templateUrl: './head-banner.component.html',
    styleUrls: ['./head-banner.component.css']
})
export class HeadBannerComponent implements OnInit {

    labels: Array<string> = ['Accueil',
        'Prendre rendez-vous'];

    constructor(private headerService: HeaderService) { }

    ngOnInit() { }

    clickLabel(label: string) {
        this.headerService.changeHomePage(label);
    }
}
