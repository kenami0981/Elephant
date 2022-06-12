import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddsBillingDetailsDtoPort } from '../../../application/ports/secondary/dto/adds-billing-details.dto-port';
import { BillingDetailsDTO } from '../../../application/ports/secondary/dto/billing-details.dto';

@Injectable()
export class FirebaseCheckoutService implements AddsBillingDetailsDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  add(billingDetails: Partial<BillingDetailsDTO>): Observable<void> {
    return from(this._client.collection('billing-details').add(billingDetails)).pipe(map(() => void 0));
  }
}
