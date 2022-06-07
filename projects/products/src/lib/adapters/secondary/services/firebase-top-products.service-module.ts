import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseTopProductsService } from './firebase-top-products.service';
import { GETS_ONE_TOP_PRODUCT_DTO } from '../../../application/ports/secondary/dto/gets-one-top-product.dto-port';
import { GETS_ALL_TOP_PRODUCT_DTO } from '../../../application/ports/secondary/dto/gets-all-top-product.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [FirebaseTopProductsService, { provide: GETS_ONE_TOP_PRODUCT_DTO, useExisting: FirebaseTopProductsService }, { provide: GETS_ALL_TOP_PRODUCT_DTO, useExisting: FirebaseTopProductsService }],
  exports: [],
})
export class FirebaseTopProductsServiceModule {}
