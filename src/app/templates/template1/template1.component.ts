import { Component, ViewEncapsulation } from '@angular/core';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMobileAndroid, faGlobe } from "@fortawesome/free-solid-svg-icons";
// import { PersonalInfo } from 'src/abstract_classes/personal-info';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.css'],
  encapsulation: ViewEncapsulation.None // to render css in [innerHTML] property
})
export class Template1Component {

  // constructor(public personal_info: PersonalInfo) { }
  personal_info = JSON.parse(localStorage.getItem("personal_info")! || "{}")
  summary = JSON.parse(localStorage.getItem("summary") || "{}")
  skills = JSON.parse(localStorage.getItem("skills") || "{}")
  languages = JSON.parse(localStorage.getItem("languages") || "{}")
  projects = JSON.parse(localStorage.getItem("projects") || "{}")
  certificates = JSON.parse(localStorage.getItem("certificates") || "{}")
  educations = JSON.parse(localStorage.getItem("educations") || "{}")

  linkedin_icon = faLinkedin
  github_icon = faGithub
  email_icon = faEnvelope
  mobile_icon = faMobileAndroid
  internet_icon = faGlobe
}
