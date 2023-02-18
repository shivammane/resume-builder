import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {

  name = ''
  email = ''
  mobile = ''
  linkedin = ''
  github = ''


  personal_info(data: NgForm) {
    sessionStorage.setItem("personal_info", JSON.stringify(data.value))
  }

  update() {
    const data = { name: this.name, email: this.email, linkedin: this.linkedin, github: this.github, mobile: this.mobile }
    sessionStorage.setItem("personal_info", JSON.stringify(data))
  }

  print() {

  }
}
