import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { ProductDTO } from '../../../application/ports/secondary/product.dto';
import { ProductContext } from '../../../application/ports/secondary/context/product.context';
import {
  GETS_ONE_PRODUCT_DTO,
  GetsOneProductDtoPort,
} from '../../../application/ports/secondary/gets-one-product.dto-port';
import {
  SELECTS_PRODUCT_CONTEXT,
  SelectsProductContextPort,
} from '../../../application/ports/secondary/context/selects-product.context-port';



@Component({
  selector: 'lib-single-product',
  templateUrl: './single-product.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})



export class SingleProductComponent {
  product$: Observable<ProductDTO> = this._selectsProductContext.select().pipe(
    switchMap((context) =>
      this._getsOneProductDto.getOne(context.productId as string)
    ),
    tap((data) => console.log(data))
  );
  productId$: Observable<Partial<ProductContext>> =
    this._selectsProductContext.select();

  constructor(
    @Inject(GETS_ONE_PRODUCT_DTO)
    private _getsOneProductDto: GetsOneProductDtoPort,
    @Inject(SELECTS_PRODUCT_CONTEXT)
    private _selectsProductContext: SelectsProductContextPort,
  ) {}

}

