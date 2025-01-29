import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProdutsService } from 'src/app/services/produts.service';

@Component({
  selector: 'app-edit-create-product',
  templateUrl: './edit-create-product.component.html',
  styleUrls: ['./edit-create-product.component.css'],
})
export class EditCreateProductComponent {
  productForm!: FormGroup;

  constructor(
    private _produtsService: ProdutsService,
    private _router: Router
  ) {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      const payload = {
        ...this.productForm.value,
        id: crypto.randomUUID(),
      };
      this._produtsService.addProduct(payload).subscribe({
        next: (response) => {
          this._router.navigate(['/list-products']);
        },
      });
    } else {
      console.log('Formulario no válido');
    }
  }
}
