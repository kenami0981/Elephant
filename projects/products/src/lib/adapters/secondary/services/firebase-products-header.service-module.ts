import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseProductsHeaderService } from './firebase-products-header.service';
import { GETS_ONE_PRODUCT_HEADER_DTO } from '../../../application/ports/secondary/dto/gets-one-product-header.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseProductsHeaderService, { provide: GETS_ONE_PRODUCT_HEADER_DTO, useExisting: FirebaseProductsHeaderService }],
  	exports: [] })
export class FirebaseProductsHeaderServiceModule {
}
