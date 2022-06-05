import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GetsAllFooterIconDtoPort } from '../../../application/ports/secondary/dto/gets-all-footer-icon.dto-port';
import { FooterIconDTO } from '../../../application/ports/secondary/dto/footer-icon.dto';

@Injectable()
export class FirebaseFooterIconsService implements GetsAllFooterIconDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(): Observable<FooterIconDTO[]> {
    return this._client.collection<FooterIconDTO>('footer-icons').valueChanges(({idField: 'id'}));
  }
}
