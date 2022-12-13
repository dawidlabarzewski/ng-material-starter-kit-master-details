import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {map, Observable, Subject, switchMap} from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  readonly list$: Observable<ProductModel[]> = this._productService.getAll();
  private _selectedProductIdSubject: Subject<number> = new Subject<number>();
  public selectedProductId$: Observable<number> = this._selectedProductIdSubject.asObservable();
  readonly productDetails$: Observable<ProductModel> = this.selectedProductId$.pipe(
    switchMap(id => this._productService.getOne(id))
  );

  constructor(private _productService: ProductService) {
  }

  selectProduct(id: number): void {
    this._selectedProductIdSubject.next(id);
  }
}
