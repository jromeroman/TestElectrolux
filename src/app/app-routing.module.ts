import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCreateProductComponent } from './components/edit-create-product/edit-create-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-products',
    pathMatch: 'full',
  },
  {
    path: 'list-products',
    component: ListProductsComponent,
    title: 'list product',
  },
  {
    path: 'create',
    component: EditCreateProductComponent,
    title: 'create product',
  },
  {
    path: 'edit',
    component: EditCreateProductComponent,
    title: 'edit product',
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
    title: 'detail product',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
