import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseFooterBottomService } from './firebase-footer-bottom.service';
import { GETS_ALL_FOOTER_BOTTOM_DTO } from '../../../application/ports/secondary/dto/gets-all-footer-bottom.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseFooterBottomService, { provide: GETS_ALL_FOOTER_BOTTOM_DTO, useExisting: FirebaseFooterBottomService }],
  	exports: [] })
export class FirebaseFooterBottomServiceModule {
}
