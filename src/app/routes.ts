import { ProductDetailComponent } from "./product/product-detail/product-detail.component";
import { HomeComponent } from "./shared/home/home.component";
import {Routes} from "@angular/router";

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path:'products',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
    title: 'Details'
  }
]
export default routeConfig;