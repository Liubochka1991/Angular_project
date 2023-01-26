import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HobbyComponent } from './hobby/hobby.component';
import { ResumeComponent } from './resume/resume.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { BaseComponent } from './base/base.component';
import { BillGatesComponent } from './bill-gates/bill-gates.component';

@NgModule({
  declarations: [
    AppComponent,
    HobbyComponent,
    ResumeComponent,
    ExperienceComponent,
    SkillsComponent,
    BaseComponent,
    BillGatesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
