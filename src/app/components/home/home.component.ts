import {Component, Input, OnInit} from '@angular/core';
import {HeaderService} from '../../services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input()
  homePage: string;

  constructor( private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.homePageChange.subscribe(homePage => this.homePage = homePage);
  }

}
