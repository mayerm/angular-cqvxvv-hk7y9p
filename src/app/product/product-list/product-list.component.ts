import { Component } from '@angular/core';
import {ProductDetailComponent} from '../product-detail/product-detail.component';
import { RouterLink, RouterOutlet} from '@angular/router';
import { Product } from '../product-models/products';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product-services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductDetailComponent, RouterLink, RouterOutlet],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private productService: ProductService){
    this.productService.getAllProducts().subscribe((response:any)=>{
      this.products = response.products;
    });
  }
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
