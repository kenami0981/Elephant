import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductDTO } from '../../../application/ports/secondary/product.dto';
import {
  GETS_ALL_PRODUCT_DTO,
  GetsAllProductDtoPort,
} from '../../../application/ports/secondary/gets-all-product.dto-port';
import {
  GETS_ONE_PRODUCT_DTO,
  GetsOneProductDtoPort,
} from '../../../application/ports/secondary/gets-one-product.dto-port';


@Component({
  selector: 'lib-products',
  templateUrl: './products.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  products$: Observable<ProductDTO[]> = this._getsAllProductDto.getAll()
  .pipe(
    map((products) => products.filter((product) => !product.topSeller))
  );
  product$: Observable<ProductDTO> = this._getsOneProductDto.getOne(
    'DBWQYLsxiTsyJF8Di0yM'
  );

  constructor(
    @Inject(GETS_ALL_PRODUCT_DTO)
    private _getsAllProductDto: GetsAllProductDtoPort,
    @Inject(GETS_ONE_PRODUCT_DTO)
    private _getsOneProductDto: GetsOneProductDtoPort
  ) {}
 }
