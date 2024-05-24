import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder,private productService:ProductService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      imageLink: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      category:['',Validators.required]
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      this.productService.addProduct(productData).subscribe(
        response => {
          console.log('Product added successfully', response);
          this.productForm.reset();
        },
        error => {
          console.error('error occurred while adding product:', error);
        }
      )

    }
  }

}
