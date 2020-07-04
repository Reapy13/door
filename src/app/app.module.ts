import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeadBannerComponent } from './components/head-banner/head-banner.component';
import { FooterBannerComponent } from './components/footer-banner/footer-banner.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderService } from './services/header.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeadButtonComponent } from './components/head-button/head-button.component';

@NgModule({
    declarations: [
        AppComponent,
        HeadBannerComponent,
        FooterBannerComponent,
        HomeComponent,
        HeadButtonComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule
    ],
    providers: [HeaderService],
    bootstrap: [AppComponent]
})
export class AppModule { }
