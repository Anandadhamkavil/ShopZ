import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemlist = new BehaviorSubject([])
   cartItemArray:any = []
  constructor() { }

  addToCart(product:any){
     this.cartItemArray.push(product)
    this.cartItemlist.next(this.cartItemArray) 
    console.log(this.cartItemlist);
    this.grantTotal()
  }                

  // grantTotal+
  grantTotal(){
    let total = 0
    this.cartItemArray.map((item:any)=>{
      total += item.price 
      console.log(total);
    })
    return total
  }

  // remove a particular item from cart
  removeCartItem(product:any){
    this.cartItemArray.map((item:any,index:any)=>{
      if(product.id==item.id){
        this.cartItemArray.splice(index,1)
      }
    })
    this.cartItemlist.next(this.cartItemArray)
  }

  // removeCart
  removeCart(){
    this.cartItemArray = []
    this.cartItemlist.next(this.cartItemArray)
  }

}
