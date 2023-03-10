import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  educations: { degree_name: string, college_name: string }[] = []

  education(data: NgForm) {
    this.educations.push(data.value)
    localStorage.setItem('educations', JSON.stringify(this.educations));
    (<HTMLInputElement>document.querySelector('input[name="degree_name"]')).value = '';
    (<HTMLInputElement>document.querySelector('input[name="college_name"]')).value = '';
  }

  reset(data: NgForm) {
    data.resetForm()
    localStorage.removeItem("educations")
    this.educations = []
  }
}
