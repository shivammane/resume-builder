import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { ResumeInfoRoutingModule } from './resume-info-routing.module';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { SummaryComponent } from './summary/summary.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { LanguagesComponent } from './languages/languages.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ExperienceComponent } from './experience/experience.component';


@NgModule({
  declarations: [
    SkillsComponent,
    EducationComponent,
    ProjectsComponent,
    SummaryComponent,
    CertificatesComponent,
    LanguagesComponent,
    AchievementsComponent,
    HobbiesComponent,
    PersonalInfoComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    ResumeInfoRoutingModule,
    FormsModule
  ],
  exports: [
    SkillsComponent,
    EducationComponent,
    ProjectsComponent,
    SummaryComponent,
    CertificatesComponent,
    LanguagesComponent,
    AchievementsComponent,
    HobbiesComponent,
    PersonalInfoComponent,
    ExperienceComponent
  ]
})
export class ResumeInfoModule { }
