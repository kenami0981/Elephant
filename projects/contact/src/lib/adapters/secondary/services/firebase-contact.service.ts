import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddsContactDtoPort } from '../../../application/ports/secondary/dto/adds-contact.dto-port';
import { ContactDTO } from '../../../application/ports/secondary/dto/contact.dto';

@Injectable()
export class FirebaseContactService implements AddsContactDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  add(contact: Partial<ContactDTO>): Observable<void> {
    return from(this._client.collection('contact').add(contact)).pipe(map(() => void 0));
  }
}
