import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebasePromotionsService } from './firebase-promotions.service';
import { GETS_ALL_PROMOTION_DTO } from '../../../application/ports/secondary/dto/gets-all-promotion.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebasePromotionsService,
    { provide: GETS_ALL_PROMOTION_DTO, useExisting: FirebasePromotionsService },
  ],
  exports: [],
})
export class FirebasePromotionsServiceModule {}
