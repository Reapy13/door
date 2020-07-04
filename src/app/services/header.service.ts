import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

    @Output()
    homePageEvtEmt: EventEmitter<string> = new EventEmitter();

    constructor() { }

    changeHomePage(homePage: string) {
        this.homePageEvtEmt.emit(homePage);
    }
}
