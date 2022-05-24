import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseContactService } from './firebase-contact.service';
import { ADDS_CONTACT_DTO } from '../../../application/ports/secondary/dto/adds-contact.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseContactService, { provide: ADDS_CONTACT_DTO, useExisting: FirebaseContactService }],
  	exports: [] })
export class FirebaseContactServiceModule {
}
