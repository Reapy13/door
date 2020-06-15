import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  @Output()
  homePageChange: EventEmitter<string> = new EventEmitter();

  @Output()
  hasChanged: EventEmitter<string> = new EventEmitter();

  constructor() { }

  changeHomePage(homePage: string) {
    this.hasChanged.emit('closed');
    this.homePageChange.emit(homePage);
    this.hasChanged.emit('open');
  }
}
