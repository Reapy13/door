import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-head-button',
  templateUrl: './head-button.component.html',
  styleUrls: ['./head-button.component.css']
})
export class HeadButtonComponent implements OnInit {

  @Input()
  private label: string;

  constructor() { }

  ngOnInit() {
  }

}
