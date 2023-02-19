import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {

  personal_info(data: NgForm) {
    sessionStorage.setItem("personal_info", JSON.stringify(data.value))
  }

  reset(data: NgForm) {
    data.resetForm()
    sessionStorage.removeItem("personal_info")
  }
}
