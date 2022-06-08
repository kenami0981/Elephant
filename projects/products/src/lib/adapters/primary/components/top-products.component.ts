import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { TopProductDTO } from '../../../application/ports/secondary/dto/top-product.dto';
import {
  GETS_ALL_PRODUCT_DTO,
  GetsAllProductDtoPort,
} from '../../../application/ports/secondary/gets-all-product.dto-port';
import {
  GETS_ONE_PRODUCT_HEADER_DTO,
  GetsOneProductHeaderDtoPort,
} from '../../../application/ports/secondary/dto/gets-one-product-header.dto-port';
import {
  GETS_ALL_TOP_PRODUCT_DTO,
  GetsAllTopProductDtoPort,
} from '../../../application/ports/secondary/dto/gets-all-top-product.dto-port';
import {
  GETS_ONE_TOP_PRODUCT_DTO,
  GetsOneTopProductDtoPort,
} from '../../../application/ports/secondary/dto/gets-one-top-product.dto-port';

@Component({
  selector: 'lib-top-products',
  templateUrl: './top-products.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopProductsComponent {
  products$: Observable<TopProductDTO[]> = this._getsAllTopProductDto.getAll();
  product$: Observable<TopProductDTO> = this._getsOneTopProductDto.getOne(
    'wLYq7zOK9ULgKdB1QPbt'
  );

  constructor(
    @Inject(GETS_ALL_PRODUCT_DTO)
    private _getsAllProductDto: GetsAllProductDtoPort,
    @Inject(GETS_ONE_PRODUCT_HEADER_DTO)
    private _getsOneProductHeaderDto: GetsOneProductHeaderDtoPort,
    @Inject(GETS_ALL_TOP_PRODUCT_DTO)
    private _getsAllTopProductDto: GetsAllTopProductDtoPort,
    @Inject(GETS_ONE_TOP_PRODUCT_DTO)
    private _getsOneTopProductDto: GetsOneTopProductDtoPort
  ) {}
}
