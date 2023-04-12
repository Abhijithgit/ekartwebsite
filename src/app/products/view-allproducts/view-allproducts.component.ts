import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-allproducts',
  templateUrl: './view-allproducts.component.html',
  styleUrls: ['./view-allproducts.component.css']
})
export class ViewAllproductsComponent implements OnInit {
productList:any

filterProducts:any
searchKey:any=""

  constructor(private ps:ProductService){}

  ngOnInit(): void{
  this.ps.viewAllProduct().subscribe(data=>{
    // console.log(data);
    this.productList=data
    
  })
this.ps.search.subscribe((value:any)=>{
  this.searchKey=value
})
  }

  filter(category:any){
this.filterProducts=this.productList.filter((item:any)=>item.categoryId==category || category=="")

  }

}
