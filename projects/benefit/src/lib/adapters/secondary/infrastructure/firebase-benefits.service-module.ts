import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseBenefitsService } from './firebase-benefits.service';
import { GETS_ALL_BENEFIT_DTO } from '../../../application/ports/secondary/gets-all-benefit.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseBenefitsService,
    { provide: GETS_ALL_BENEFIT_DTO, useExisting: FirebaseBenefitsService },
  ],
  exports: [],
})
export class FirebaseBenefitsServiceModule {}
