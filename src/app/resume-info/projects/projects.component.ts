import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: { project: string, project_points: string[] }[] = []
  project_points: string[] = []
  project_name = ''
  project_detail(data: NgForm) {
    this.project_points.push(data.value.project_points);
    (<HTMLInputElement>document.querySelector('input[name="project_points"]')).value = '';
  }

  project(data: NgForm) {
    this.project_name = data.value.project;
    this.projects.push({ project: this.project_name, project_points: this.project_points })
    sessionStorage.setItem('projects', JSON.stringify(this.projects))
    this.project_points = [];
    (<HTMLInputElement>document.querySelector('input[name="project"]')).value = '';
  }

  reset(data: NgForm) {
    data.resetForm()
    sessionStorage.removeItem("projects")
  }
}
