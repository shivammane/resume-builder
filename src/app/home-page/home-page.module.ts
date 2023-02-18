import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeContainerComponent } from './home-container/home-container.component';


@NgModule({
  declarations: [
    AboutComponent,
    HeaderComponent,
    HomeComponent,
    HomeContainerComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ],
  exports: [HeaderComponent]
})
export class HomePageModule { }
