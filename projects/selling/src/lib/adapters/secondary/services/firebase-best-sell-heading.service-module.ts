import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseBestSellHeadingService } from './firebase-best-sell-heading.service';
import { GETS_ONE_BEST_SELL_HEADING_DTO } from '../../../application/ports/secondary/dto/gets-one-best-sell-heading.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseBestSellHeadingService, { provide: GETS_ONE_BEST_SELL_HEADING_DTO, useExisting: FirebaseBestSellHeadingService }],
  	exports: [] })
export class FirebaseBestSellHeadingServiceModule {
}
