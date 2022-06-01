import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseFooterFormService } from './firebase-footer-form.service';
import { ADDS_FOOTER_FORM_DTO } from '../../../application/ports/secondary/dto/adds-footer-form.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseFooterFormService, { provide: ADDS_FOOTER_FORM_DTO, useExisting: FirebaseFooterFormService }],
  	exports: [] })
export class FirebaseFooterFormServiceModule {
}
