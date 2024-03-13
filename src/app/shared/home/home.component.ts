import { Component } from '@angular/core';
import { ProductListComponent } from '../../product/product-list/product-list.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CommonModule, ProductListComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor() {}
}
