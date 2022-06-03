import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseFooterIconsService } from './firebase-footer-icons.service';
import { GETS_ALL_FOOTER_ICON_DTO } from '../../../application/ports/secondary/dto/gets-all-footer-icon.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseFooterIconsService, { provide: GETS_ALL_FOOTER_ICON_DTO, useExisting: FirebaseFooterIconsService }],
  	exports: [] })
export class FirebaseFooterIconsServiceModule {
}
