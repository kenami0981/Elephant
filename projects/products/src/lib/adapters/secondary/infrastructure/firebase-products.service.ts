import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { filterByCriterion } from '@lowgular/shared';
import { GetsAllProductDtoPort } from '../../../application/ports/secondary/gets-all-product.dto-port';
import { GetsOneProductDtoPort } from '../../../application/ports/secondary/gets-one-product.dto-port';
import { ProductDTO } from '../../../application/ports/secondary/product.dto';

@Injectable()
export class FirebaseProductsService
  implements GetsAllProductDtoPort, GetsOneProductDtoPort
{
  constructor(private _client: AngularFirestore) {}

  getAll(criterion: Partial<ProductDTO>): Observable<ProductDTO[]> {
    return this._client
      .collection<ProductDTO>('product-list', (ref) => ref.orderBy('id', 'asc'))
      .valueChanges({ idField: 'id' })
      .pipe(map((data: ProductDTO[]) => filterByCriterion(data, criterion)));
  }

  getOne(id: string): Observable<ProductDTO> {
    return this._client
      .doc<ProductDTO>('product-list/' + id)
      .valueChanges({ idField: 'id' })
      .pipe(
        switchMap((item) =>
          item
            ? of(item)
            : throwError(new Error('Item does not exist in firebase'))
        )
      );
  }
}
