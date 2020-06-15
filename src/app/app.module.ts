import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeadBannerComponent } from './components/head-banner/head-banner.component';
import { FooterBannerComponent } from './components/footer-banner/footer-banner.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderService} from './services/header.service';

@NgModule({
  declarations: [
    AppComponent,
    HeadBannerComponent,
    FooterBannerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
