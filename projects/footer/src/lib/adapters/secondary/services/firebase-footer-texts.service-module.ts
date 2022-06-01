import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseFooterTextsService } from './firebase-footer-texts.service';
import { GETS_ALL_FOOTER_TEXT_DTO } from '../../../application/ports/secondary/dto/gets-all-footer-text.dto-port';
import { GETS_ONE_FOOTER_TEXT_DTO } from '../../../application/ports/secondary/dto/gets-one-footer-text.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseFooterTextsService,
    {
      provide: GETS_ALL_FOOTER_TEXT_DTO,
      useExisting: FirebaseFooterTextsService,
    },
    {
      provide: GETS_ONE_FOOTER_TEXT_DTO,
      useExisting: FirebaseFooterTextsService,
    },
  ],
  exports: [],
})
export class FirebaseFooterTextsServiceModule {}
