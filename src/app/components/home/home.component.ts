import {Component, Input, OnInit} from '@angular/core';
import {HeaderService} from '../../services/header.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [
        trigger('openClose', [
            state('open', style({
                opacity: 1
            })),
            state('closed', style({
                opacity: 0
            })),
            transition('* => closed', [
                animate(0)
            ]),
            transition('* => open', [
                animate(500)
            ]),
        ]),
    ]
})
export class HomeComponent implements OnInit {

    state = 'open';

    @Input()
    homePage: string;

    constructor(private headerService: HeaderService) { }

    ngOnInit() {
        this.headerService.homePageEvtEmt.subscribe(page => this.changeHomePage(page));
    }

    changeHomePage(page: string) {
        this.state = 'closed';
        this.homePage = page;
        const that = this;
        setTimeout(() => that.state = 'open', 100);
    }
}
