import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  product: any;
  products: any[] = [];

  constructor(private productService: ProductService,private router:Router) {}

  ngOnInit() {
    console.log('HomeComponent initialized');
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(
      (response: any[]) => {
        this.products = response;
        console.log('Products fetched:', this.products);
      },
      error => {
        console.error('Error occurred while fetching the products:', error);
      }
    );
  }

  getProduct(productId: number) {
    console.log('Fetching product with ID:', productId); // Log product ID
    this.productService.getProduct(productId).subscribe(
      (response: any) => {
        this.product = response;
        console.log('Fetched product:', this.product);
      },
      error => {
        console.error('Error occurred while fetching the product:', error);
      }
    );
  }

  viewProduct(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}
