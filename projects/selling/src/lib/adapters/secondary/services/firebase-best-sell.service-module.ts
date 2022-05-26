import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseBestSellService } from './firebase-best-sell.service';
import { GETS_ALL_BEST_SELL_DTO } from '../../../application/ports/secondary/dto/gets-all-best-sell.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseBestSellService, { provide: GETS_ALL_BEST_SELL_DTO, useExisting: FirebaseBestSellService }],
  	exports: [] })
export class FirebaseBestSellServiceModule {
}
