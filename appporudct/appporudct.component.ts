import { Component } from '@angular/core';

@Component({
  selector: 'app-appporudct',
  templateUrl: './appporudct.component.html',
  styleUrls: ['./appporudct.component.css']
})
export class AppporudctComponent {
  products={
    pName:'',
    pQuantity:'',
    pPrice:''
  }

  add(){

    console.log(this.products)
  }

}
