import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {HeaderService} from '../../services/header.service';

@Component({
    selector: 'app-cv',
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.css'],
    animations: [
        trigger('openClose', [
            state('open', style({
                opacity: 1
            })),
            state('closed', style({
                opacity: 0
            })),
            transition('open => closed', [
                animate(0)
            ]),
            transition('closed => open', [
                animate(500)
            ]),
        ]),
    ]
})
export class CvComponent implements OnInit {

    private state = 'closed';
    private page: string;

    constructor(private headerService: HeaderService) { }

    ngOnInit() {
        this.headerService.homePageEvtEmt.subscribe(page => {
            if (page !== this.page) {
                this.changeHomePage(page);
            }
        });
        this.changeToOpen();
    }

    private changeHomePage(page: string) {
        this.state = 'closed';
        this.page = page;
        this.changeToOpen();
    }

    private changeToOpen() {
        const that = this;
        setTimeout(() => that.state = 'open', 100);
    }
}
