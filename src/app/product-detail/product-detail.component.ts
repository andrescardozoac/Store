import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router'
import {ProductsService} from '../products.service'


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private productsService : ProductsService
  ) { 

  }

  ngOnInit(){
    this.route.params.subscribe((params : Params) => {
      const id = params.id;
      console.log(id);
      const product = this.productsService.getProduct(id);
      console.log(product);

    }
    );
  }

}