import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  products:any = []
  filterCategory :any
  searchItem:string=''
  constructor(private api:ApiService){ }
  
  ngOnInit(): void {
    this.api.getAllProducts()
    .subscribe((result:any)=>{
      this.products = result.products
      this.filterCategory = result.products

      this.products.forEach((a:any)=>{
        if(a.category === "women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }
      })
      console.log(this.products);
    })

    // to get search term from header component using behavior subject in api service
    this.api.searchKey
    .subscribe((result:any)=>{
      console.log(result);
      this.searchItem = result
    })
    
  }

  filter(category:string){
    this.filterCategory = this.products 
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }


}
