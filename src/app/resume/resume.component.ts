import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
name:String='Хмельницька Любов Іванівна';
phone:String='+30663652625';
email:String='rysaja@gmail.com';
home:String='Чернівці';
experience:Number=2;
photo:Object='../../assets/photo.jpg';
}
