import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseFoundersService } from './firebase-founders.service';
import { GETS_ALL_FOUNDERS_DTO } from '../../../application/ports/secondary/dto/gets-all-founders.dto-port';
import { GETS_ONE_FOUNDERS_DTO } from '../../../application/ports/secondary/dto/gets-one-founders.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseFoundersService,
    { provide: GETS_ALL_FOUNDERS_DTO, useExisting: FirebaseFoundersService },
    { provide: GETS_ONE_FOUNDERS_DTO, useExisting: FirebaseFoundersService }
  ],
  exports: [],
})
export class FirebaseFoundersServiceModule {}
