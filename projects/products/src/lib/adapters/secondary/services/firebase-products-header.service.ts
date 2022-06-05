import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GetsOneProductHeaderDtoPort } from '../../../application/ports/secondary/dto/gets-one-product-header.dto-port';
import { ProductHeaderDTO } from '../../../application/ports/secondary/dto/product-header.dto';

@Injectable()
export class FirebaseProductsHeaderService
  implements GetsOneProductHeaderDtoPort
{
  constructor(private _client: AngularFirestore) {}

  getOne(id: string): Observable<ProductHeaderDTO> {
    return this._client
      .doc<ProductHeaderDTO>('product-heading/' + id)
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
