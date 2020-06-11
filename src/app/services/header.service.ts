import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  @Output()
  homePageChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  changeHomePage(homePage: string) {
    this.homePageChange.emit(homePage);
  }
}
