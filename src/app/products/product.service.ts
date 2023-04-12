import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import behaviour subject
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // OBJECT CREATE FOR BS
  search=new BehaviorSubject("")

  constructor(private http:HttpClient) { }

  // Api call to view all products
  viewAllProduct(){
   return this.http.get('http://localhost:3000/products')
  }
  // api call to view single product
  viewProduct(productId:any){
    return this.http.get('http://localhost:3000/products/'+productId)
  }
//  /api to delete a product 
deleteProduct(productId:any){
  return this.http.delete('http://localhost:3000/products/'+productId)
}
// api call to add new product
addNewProduct(ProductData:any){
  return this.http.post('http://localhost:3000/products/',ProductData)

}
// api call to update product
updateNewProduct(productId:any,productData:any){
  return this.http.put('http://localhost:3000/products/'+productId,productData)

}
}
