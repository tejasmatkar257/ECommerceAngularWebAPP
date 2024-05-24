import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  product: any;
  quantity: number = 1;
  address: string = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = +params['id'];
      this.productService.getProduct(productId).subscribe(
        (response: any) => {
          this.product = response;
        },
        error => {
          console.error('Error occurred while fetching the product details:', error);
        }
      );
    });
  }

  updatePrice() {
    return this.product.price * this.quantity;
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  submitOrder() {
    // Submit order logic
  }
}
