import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddsFooterFormDtoPort } from '../../../application/ports/secondary/dto/adds-footer-form.dto-port';
import { FooterFormDTO } from '../../../application/ports/secondary/dto/footer-form.dto';

@Injectable()
export class FirebaseFooterFormService implements AddsFooterFormDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  add(footerForm: Partial<FooterFormDTO>): Observable<void> {
    return from(this._client.collection('footer-form').add(footerForm)).pipe(map(() => void 0));
  }
}
