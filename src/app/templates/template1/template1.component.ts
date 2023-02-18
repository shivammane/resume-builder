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
  personal_info = JSON.parse(sessionStorage.getItem("personal_info")! || "{}")
  summary = JSON.parse(sessionStorage.getItem("summary") || "{}")
  skills = JSON.parse(sessionStorage.getItem("skills") || "{}")
  languages = JSON.parse(sessionStorage.getItem("languages") || "{}")
  projects = JSON.parse(sessionStorage.getItem("projects") || "{}")
  certificates = JSON.parse(sessionStorage.getItem("certificates") || "{}")
  educations = JSON.parse(sessionStorage.getItem("educations") || "{}")

  linkedin_icon = faLinkedin
  github_icon = faGithub
  email_icon = faEnvelope
  mobile_icon = faMobileAndroid
  internet_icon = faGlobe
}
