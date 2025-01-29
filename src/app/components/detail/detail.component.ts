import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from 'src/app/services/produts.service';
import { ProdutsService } from 'src/app/services/produts.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  product: IProducts | null = null;
  loading: boolean = true;
  error: string | null = null;

  constructor(
    private productService: ProdutsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProductById(productId).subscribe(
        (data) => {
          this.product = data;
          this.loading = false;
        },
        (error) => {
          this.error = 'Error al cargar el producto';
          this.loading = false;
        }
      );
    }
  }
}
