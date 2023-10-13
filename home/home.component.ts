import { Component, OnInit } from '@angular/core';
import { ProServeService } from '../pro-serve.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  values:any;
  constructor(private serve:ProServeService){}
  ngOnInit(): void {
    
    this.serve.getProducts().subscribe((res)=>{
console.log(res);
this.values=res;


    })
  }

}
