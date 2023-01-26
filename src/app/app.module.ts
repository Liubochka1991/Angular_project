import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HobbyComponent } from './hobby/hobby.component';
import { ResumeComponent } from './resume/resume.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { BaseComponent } from './base/base.component';
import { BillGatesComponent } from './bill-gates/bill-gates.component';
import {Routes, RouterModule} from '@angular/router';
import { BiggestCarComponent } from './biggest-car/biggest-car.component';
import { BiggestShipComponent } from './biggest-ship/biggest-ship.component';
import { BiggestAirplaneComponent } from './biggest-airplane/biggest-airplane.component';

const routes:Routes=[
  {path:'', component: BaseComponent,
  children:[
    {path:'airplane', component: BiggestAirplaneComponent},
    {path:'car', component:BiggestCarComponent},
    {path:'ship', component:BiggestShipComponent}
  ]
},
  {path:'billGates', component: BillGatesComponent},
  {path:'hobby', component: HobbyComponent},
  {path:'resume', component: ResumeComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HobbyComponent,
    ResumeComponent,
    ExperienceComponent,
    SkillsComponent,
    BaseComponent,
    BillGatesComponent,
    BiggestCarComponent,
    BiggestShipComponent,
    BiggestAirplaneComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
