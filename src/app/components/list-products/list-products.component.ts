import { Component, Input, OnInit } from '@angular/core';
import { IProducts, ProdutsService } from '../../services/produts.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  @Input() products: any = [];
  constructor(
    private _produtsService: ProdutsService,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this.getProducts();
  }
  private getProducts() {
    this._produtsService.getProducts().subscribe({
      next: (response) => {
        this.products = response;
      },
    });
  }
  public handleDelete(row: any): void {
    this._produtsService.removeProduct(row.id).subscribe({
      next: (response) => {
        this.getProducts();
      },
    });
  }

  public handleUpdate(row: any  ): void {
    console.log(row)
    if (row?.id) {
      this._router.navigate([`/detail/${row.id}`]);
    } else {
      console.error('El id no está presente');
    }
  }
  public goCreateProduct(){
    this._router.navigate(['/create']);
  }
}
