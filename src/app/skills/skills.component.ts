import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
skill1:String='HTML';
skill2:String='CSS';
skill3:String='Java Script';
good:String='Добре';
veryGood:String='Дуже добре';
interes1:String='Читання';
interes2:String='Навчання';
interes3:String='Програмування';
certificate:String='Step It Academy';
yearCertificate:Number=2022;

}
