import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TemplatesModule } from './templates/templates.module';
import { HomePageModule } from './home-page/home-page.module';
import { ResumeInfoModule } from './resume-info/resume-info.module';
import { ResumeInfoContainerComponent } from './resume-info-container/resume-info-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeInfoContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    TemplatesModule,
    HomePageModule,
    ResumeInfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
