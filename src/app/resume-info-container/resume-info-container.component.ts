import { Component, Injector } from '@angular/core';
// import { PersonalInfo } from 'src/abstract_classes/personal-info';
import { TemplateService } from 'src/app/services/template.service';


@Component({
  selector: 'app-resume-info-container',
  templateUrl: './resume-info-container.component.html',
  styleUrls: ['./resume-info-container.component.css']
})
export class ResumeInfoContainerComponent {

  constructor(private templates: TemplateService, private injector: Injector) { }

  personal_inf() {
    return Injector.create(
      [{ provide: '', useValue: '' }],
      this.injector
    );
  } //pass date to dynamic compoenent (need this just for update data on screen dynamically)

  template = this.templates['template1']

  printResume() {
    window.print()
  }
  resetResume() {
    localStorage.clear()
    location.reload()
  }
}
