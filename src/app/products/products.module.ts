import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    ProductsComponent,
    AllProductsComponent,
    CartComponent,
    WishlistComponent,
    ViewProductComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule 
  ]
})
export class ProductsModule { }
