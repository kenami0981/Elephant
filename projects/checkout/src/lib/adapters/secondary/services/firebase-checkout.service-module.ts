import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseCheckoutService } from './firebase-checkout.service';
import { ADDS_BILLING_DETAILS_DTO } from '../../../application/ports/secondary/dto/adds-billing-details.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseCheckoutService, { provide: ADDS_BILLING_DETAILS_DTO, useExisting: FirebaseCheckoutService }],
  	exports: [] })
export class FirebaseCheckoutServiceModule {
}
