import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GetsAllFooterTextDtoPort } from '../../../application/ports/secondary/dto/gets-all-footer-text.dto-port';
import { GetsOneFooterTextDtoPort } from '../../../application/ports/secondary/dto/gets-one-footer-text.dto-port';
import { FooterTextDTO } from '../../../application/ports/secondary/dto/footer-text.dto';

@Injectable()
export class FirebaseFooterTextsService
  implements GetsAllFooterTextDtoPort, GetsOneFooterTextDtoPort
{
  constructor(private _client: AngularFirestore) {}

  getAll(): Observable<FooterTextDTO[]> {
    return this._client
      .collection<FooterTextDTO>('footer')
      .valueChanges({ idField: 'id' });
  }

  getOne(id: string): Observable<FooterTextDTO> {
    return this._client
      .doc<FooterTextDTO>('footer-form/' + id)
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
