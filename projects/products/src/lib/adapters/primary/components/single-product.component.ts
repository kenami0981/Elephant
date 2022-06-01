import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDTO } from '../../../application/ports/secondary/product.dto';
import {
  GETS_ONE_PRODUCT_DTO,
  GetsOneProductDtoPort,
} from '../../../application/ports/secondary/gets-one-product.dto-port';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-single-product',
  templateUrl: './single-product.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleProductComponent {
  product$: Observable<ProductDTO> = this._getsOneProductDto.getOne(
    this._activatedRoute.snapshot.params['productId']
    );

  constructor(
    @Inject(GETS_ONE_PRODUCT_DTO)
    private _getsOneProductDto: GetsOneProductDtoPort,
    private _activatedRoute: ActivatedRoute,
  ) {}
}
