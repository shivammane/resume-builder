import { Injectable } from '@angular/core';
import { Template1Component } from '../templates/template1/template1.component';
import { Template2Component } from '../templates/template2/template2.component';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  template1 = Template1Component
  template2 = Template2Component
}
