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
import {RouterModule} from '@angular/router';
import { CvComponent } from './components/cv/cv.component';
import { PriceComponent } from './components/price/price.component';
import { ContactComponent } from './components/contact/contact.component';

const routes = [
    { path: '', component: HomeComponent },
    { path: 'cv', component: CvComponent },
    { path: 'prestations/honoraires', component: PriceComponent },
    { path: 'contact', component: ContactComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        HeadBannerComponent,
        FooterBannerComponent,
        HomeComponent,
        HeadButtonComponent,
        CvComponent,
        PriceComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        RouterModule.forRoot(routes)
    ],
    providers: [HeaderService],
    bootstrap: [AppComponent]
})
export class AppModule { }
