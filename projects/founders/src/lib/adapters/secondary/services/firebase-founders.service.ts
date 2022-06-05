import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GetsAllFoundersDtoPort } from '../../../application/ports/secondary/dto/gets-all-founders.dto-port';
import { GetsOneFoundersDtoPort } from '../../../application/ports/secondary/dto/gets-one-founders.dto-port';
import { FoundersDTO } from '../../../application/ports/secondary/dto/founders.dto';

@Injectable()
export class FirebaseFoundersService
  implements GetsAllFoundersDtoPort, GetsOneFoundersDtoPort
{
  constructor(private _client: AngularFirestore) {}

  getAll(): Observable<FoundersDTO[]> {
    return this._client
      .collection<FoundersDTO>('founders', (ref) => ref.orderBy('id', 'asc'))
      .valueChanges({ idField: 'id' });
  }

  getOne(id: string): Observable<FoundersDTO> {
    return this._client
      .doc<FoundersDTO>('founders-title/' + id)
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
