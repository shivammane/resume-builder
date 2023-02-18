import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { Template1Component } from './template1/template1.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Template2Component } from './template2/template2.component';


@NgModule({
  declarations: [
    Template1Component,
    Template2Component
  ],
  imports: [
    CommonModule,
    TemplatesRoutingModule,
    FontAwesomeModule
  ]
})
export class TemplatesModule { }
