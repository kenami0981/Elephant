import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDTO } from '../../../application/ports/secondary/product.dto';
import {
  GETS_ALL_PRODUCT_DTO,
  GetsAllProductDtoPort,
} from '../../../application/ports/secondary/gets-all-product.dto-port';

@Component({
  selector: 'lib-all-products',
  templateUrl: './all-products.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllProductsComponent {
  products$: Observable<ProductDTO[]> = this._getsAllProductDto.getAll();

  constructor(
    @Inject(GETS_ALL_PRODUCT_DTO)
    private _getsAllProductDto: GetsAllProductDtoPort
  ) {}
}
