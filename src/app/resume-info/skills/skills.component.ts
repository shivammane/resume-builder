import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills: string[] = []
  skill(data: NgForm) {
    this.skills.push(data.value.skill)
    sessionStorage.setItem("skills", JSON.stringify(this.skills));

    (<HTMLInputElement>document.querySelector('input[name="skill"]')).value = '';
  }

  reset(data: NgForm) {
    sessionStorage.removeItem("skills")
  }
}
