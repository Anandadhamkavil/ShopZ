import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:any = []
  grandTotal:number = 0
  discount:number=0
  discountTotal:number=0
  checkoutMsg=''
  cartItemCount:number = 0
  constructor(private cart:CartService,private router:Router) { }

  ngOnInit(): void {
    this.cart.cartItemlist
    .subscribe((data:any)=>{
      this.cartItems = data
      this.cartItemCount = data.length
    })
    let total = this.cart.grantTotal()
    this.grandTotal = Number(total.toFixed(2))
    this.discountTotal = this.grandTotal
  }

  // removeItem(product)
  removeItem(product:any){
    this.cart.removeCartItem(product)
    let total = this.cart.grantTotal()
    this.grandTotal = Number(total.toFixed(2)) 
    this.discountTotal = this.grandTotal
  }

  // removeCart()
  removeCart(){
    this.cart.removeCart()
  }

       // discount3percent()
       discount3percent(){
        this.discount = Math.floor(this.grandTotal * .03)
        this.discountTotal = Math.floor(this.grandTotal-this.discount)
      }

      // discount10percent()
        discount10percent(){
        this.discount = Math.floor(this.grandTotal * .1)
        this.discountTotal = Math.floor(this.grandTotal-this.discount)
      }

      // discount50percent()
        discount50percent(){
        this.discount = Math.floor(this.grandTotal * .5)
        this.discountTotal = Math.floor(this.grandTotal-this.discount)
      }

      // checkout()
      checkout(){
        this.checkoutMsg ='Successfully Placed your order Thank you...'
        setTimeout(()=>{
              this.removeCart()
              // navigate login
              this.router.navigateByUrl('/products')  
              window.location.reload()
      },5000)
      }
}
