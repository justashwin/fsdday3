import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProServeService {

  constructor(private http :HttpClient) {}
  getProducts() {
   // return this.http.get("https://dummyjson.com/products")
    return this.http.get("http://localhost:3000/products")
   }
}
