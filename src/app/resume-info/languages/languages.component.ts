import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent {
  proficiency = '0'
  languages: { language: string, proficiency: string }[] = []
  language(data: NgForm) {
    this.languages.push(data.value)
    sessionStorage.setItem("languages", JSON.stringify(this.languages));
    (<HTMLInputElement>document.querySelector('input[name="language"]')).value = '';
  }
}
