import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  productId: number = 0;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = +params['id']; // Convert string to number
      this.fetchProduct();
    });
  }

  fetchProduct() {
    this.productService.getProduct(this.productId).subscribe(
      (response: any) => {
        this.product = response;
      },
      error => {
        console.error('Error occurred while fetching the product details:', error);
      }
    );
  }

  buyNow(productId: number) {
    this.router.navigate(['/checkout', productId]);
  }
}
