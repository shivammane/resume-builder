import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  summary(data: NgForm) {
    sessionStorage.setItem("summary", JSON.stringify(data.value))
  }
}
