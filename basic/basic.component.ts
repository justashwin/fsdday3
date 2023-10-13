import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent {
  fname="Ashwin";
  fname1="SSET";
  myname="";
  age="";
  myarray=["Apple","Orange","Banana"];
  hide=true;
  constructor(){}

}
