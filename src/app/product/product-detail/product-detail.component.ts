import { Component, inject } from '@angular/core';
import { Product } from '../product-models/products';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from '../product-services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './product-detail-component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent  {
  route: ActivatedRoute = inject(ActivatedRoute);
  productService: ProductService = inject(ProductService);
  productId = -1;
  product: Product | undefined;
  
  constructor() { 
    this.productId = Number(this.route.snapshot.params['id']);
    this.productService.getProductById(this.productId).subscribe((response:any)=>{
      this.product = response;
    });
  }
}
