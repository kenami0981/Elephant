import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GetsAllFooterBottomDtoPort } from '../../../application/ports/secondary/dto/gets-all-footer-bottom.dto-port';
import { FooterBottomDTO } from '../../../application/ports/secondary/dto/footer-bottom.dto';

@Injectable()
export class FirebaseFooterBottomService implements GetsAllFooterBottomDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(): Observable<FooterBottomDTO[]> {
    return this._client.collection<FooterBottomDTO>('footer-bottom').valueChanges(({idField: 'id'}));
  }
}
