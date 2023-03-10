import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  summary(data: NgForm) {
    localStorage.setItem("summary", JSON.stringify(data.value))
  }

  reset(data: NgForm) {
    data.resetForm()
    localStorage.removeItem("summary")
  }
}
