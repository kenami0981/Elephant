import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseTestimonialsService } from './firebase-testimonials.service';
import { GETS_ALL_TESTIMONIALS_DTO } from '../../../application/ports/secondary/dto/gets-all-testimonials.dto-port';
import { GETS_ONE_TESTIMONIALS_DTO } from '../../../application/ports/secondary/dto/gets-one-testimonials.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseTestimonialsService, { provide: GETS_ALL_TESTIMONIALS_DTO, useExisting: FirebaseTestimonialsService }, { provide: GETS_ONE_TESTIMONIALS_DTO, useExisting: FirebaseTestimonialsService }],
  	exports: [] })
export class FirebaseTestimonialsServiceModule {
}
