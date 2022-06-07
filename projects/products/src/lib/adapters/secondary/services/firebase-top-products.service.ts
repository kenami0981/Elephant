import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GetsOneTopProductDtoPort } from '../../../application/ports/secondary/dto/gets-one-top-product.dto-port';
import { GetsAllTopProductDtoPort } from '../../../application/ports/secondary/dto/gets-all-top-product.dto-port';
import { TopProductDTO } from '../../../application/ports/secondary/dto/top-product.dto';

@Injectable()
export class FirebaseTopProductsService
  implements GetsOneTopProductDtoPort, GetsAllTopProductDtoPort
{
  constructor(private _client: AngularFirestore) {}

  getOne(id: string): Observable<TopProductDTO> {
    return this._client
      .doc<TopProductDTO>('best-sell-heading/' + id)
      .valueChanges({ idField: 'id' })
      .pipe(
        switchMap((item) =>
          item
            ? of(item)
            : throwError(new Error('Item does not exist in firebase'))
        )
      );
  }

  getAll(): Observable<TopProductDTO[]> {
    return this._client
      .collection<TopProductDTO>('best-sells')
      .valueChanges({ idField: 'id' });
  }
}
