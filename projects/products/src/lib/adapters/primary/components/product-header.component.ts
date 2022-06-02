import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ProductHeaderDTO } from '../../../application/ports/secondary/dto/product-header.dto';
import {
  GETS_ONE_PRODUCT_HEADER_DTO,
  GetsOneProductHeaderDtoPort,
} from '../../../application/ports/secondary/dto/gets-one-product-header.dto-port';

@Component({
  selector: 'lib-product-header',
  templateUrl: './product-header.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductHeaderComponent {
  product$: Observable<ProductHeaderDTO> = this._getsOneProductHeaderDto.getOne(
    'DBWQYLsxiTsyJF8Di0yM'
  );

  constructor(
    @Inject(GETS_ONE_PRODUCT_HEADER_DTO)
    private _getsOneProductHeaderDto: GetsOneProductHeaderDtoPort
  ) {}
}
