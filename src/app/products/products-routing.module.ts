import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  // all-products
  { path: '', component: AllProductsComponent },
  // cart
  { path: 'cart', component: CartComponent },
  // wishlist
  { path: 'wishlist', component: WishlistComponent },
  // view-product
  { path: 'view-product/:id', component: ViewProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
