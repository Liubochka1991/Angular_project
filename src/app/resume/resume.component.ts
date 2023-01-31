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
payment:number=1000;
apply:number=0.8;
hobby:Array<any>=[
  {id:1, name:"Малювання"},
  {id:2, name:"Комп'ютерні ігри"},
  {id:3, name:"Гра в шахи"}
];
bmw:String='bmw';
audi:String='audi';
mersedes:String='mersedes'
}
