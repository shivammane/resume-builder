import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeInfoContainerComponent } from "./resume-info-container/resume-info-container.component";

const routes: Routes = [{ path: '', redirectTo: '/home', pathMatch: 'full' }, { path: "build-resume", component: ResumeInfoContainerComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
