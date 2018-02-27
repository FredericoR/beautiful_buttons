import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { AccessibilityModule } from './accessibility/accessibility.module';

import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { InfoPage } from '../pages/info/info';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SearchPage } from '../pages/search/search.component';

import { OptionsService } from './options.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    InfoPage,
    HomePage,
    SearchPage,
    TabsPage,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AccessibilityModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    InfoPage,
    HomePage,
    SearchPage,
    TabsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}, OptionsService
  ]
})
export class AppModule {}
