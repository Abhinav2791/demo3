import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CommoncomponentsComponent } from './commoncomponents/commoncomponents.component';
import { NavbarComponent } from './commoncomponents/navbar/navbar.component';
import { FooterComponent } from './commoncomponents/footer/footer.component';
import { AndroidComponent } from './navigatingcomponents/android/android.component';
import { CompanyComponent } from './navigatingcomponents/company/company.component';
import { HelpComponent } from './navigatingcomponents/help/help.component';
import { IphoneComponent } from './navigatingcomponents/iphone/iphone.component';
import { SigninComponent } from './navigatingcomponents/signin/signin.component';
import { BannerComponent } from './welcome/banner/banner.component';
import { LovedComponent } from './welcome/loved/loved.component';
import { MobilesecurityComponent } from './welcome/mobilesecurity/mobilesecurity.component';
import { LatestinsightsComponent } from './welcome/latestinsights/latestinsights.component';
import { SpywareComponent } from './welcome/spyware/spyware.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PagenotfoundComponent,
    CommoncomponentsComponent,
    NavbarComponent,
    FooterComponent,
    AndroidComponent,
    CompanyComponent,
    HelpComponent,
    IphoneComponent,
    SigninComponent,
    BannerComponent,
    LovedComponent,
    MobilesecurityComponent,
    LatestinsightsComponent,
    SpywareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
