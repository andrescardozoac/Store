import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router'
import {ProductsService} from '../products.service'
import {Product} from '../product.model'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

product : Product;

  constructor(
    private route : ActivatedRoute,
    private productsService : ProductsService
  ) { 

  }

  ngOnInit(){
    this.route.params.subscribe((params : Params) => {
      const id = params.id;
      console.log(id);
      this.product = this.productsService.getProduct(id);
      
    }
    );
  }

}
