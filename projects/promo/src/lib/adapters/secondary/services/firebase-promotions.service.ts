import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GetsAllPromotionDtoPort } from '../../../application/ports/secondary/dto/gets-all-promotion.dto-port';
import { PromotionDTO } from '../../../application/ports/secondary/dto/promotion.dto';

@Injectable()
export class FirebasePromotionsService implements GetsAllPromotionDtoPort {
  constructor(private _client: AngularFirestore) {}

  getAll(): Observable<PromotionDTO[]> {
    return this._client
      .collection<PromotionDTO>('promotion')
      .valueChanges({ idField: 'id' });
  }
}
