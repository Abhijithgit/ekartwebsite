import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductsComponent } from './products.component';
import { ViewAllproductsComponent } from './view-allproducts/view-allproducts.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [{ path: '',component:ViewAllproductsComponent },
{path:'view_product/:id',component:ViewProductComponent},
{path:'add_product',component:AddProductComponent},
{path:'edit_product/:id',component:EditProductComponent},
{path:'delete_product/:id',component:DeleteProductComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
