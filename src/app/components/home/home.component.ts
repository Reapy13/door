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
        height: '100%',
        color: 'black',
        opacity: 1
      })),
      state('closed', style({
        height: '0px',
        color: 'white',
        opacity: 0
      })),
      transition('* => closed', [
        animate('10ms')
      ]),
      transition('* => open', [
        animate('1s')
      ]),
    ]),
  ]
})
export class HomeComponent implements OnInit {

  @Input()
  pageChanged = 'open';

  @Input()
  homePage: string;

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.homePageChange.subscribe(homePage => this.homePage = homePage);
    this.headerService.hasChanged.subscribe( hasChanged => this.pageChanged = hasChanged);
  }
}
