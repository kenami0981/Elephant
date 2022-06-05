import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GetsOneBestSellHeadingDtoPort } from '../../../application/ports/secondary/dto/gets-one-best-sell-heading.dto-port';
import { BestSellHeadingDTO } from '../../../application/ports/secondary/dto/best-sell-heading.dto';

@Injectable()
export class FirebaseBestSellHeadingService implements GetsOneBestSellHeadingDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getOne(id: string): Observable<BestSellHeadingDTO> {
    return this._client.doc<BestSellHeadingDTO>('best-sell-heading/'+id).valueChanges({idField: 'id'}).pipe(switchMap((item) => (item ? of(item) : throwError(new Error('Item does not exist in firebase')))));
  }
}
