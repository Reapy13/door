import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../services/header.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-head-banner',
    templateUrl: './head-banner.component.html',
    styleUrls: ['./head-banner.component.css']
})
export class HeadBannerComponent implements OnInit {

    constructor(private router: Router, private headerService: HeaderService) { }

    ngOnInit() { }

    public click(label: string) {
        this.router.navigate(['/' + label]);
        this.headerService.homePageEvtEmt.emit(label);
    }
}
