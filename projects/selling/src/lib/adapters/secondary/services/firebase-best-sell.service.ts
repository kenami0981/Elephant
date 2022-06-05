import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GetsAllBestSellDtoPort } from '../../../application/ports/secondary/dto/gets-all-best-sell.dto-port';
import { BestSellDTO } from '../../../application/ports/secondary/dto/best-sell.dto';

@Injectable()
export class FirebaseBestSellService implements GetsAllBestSellDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(): Observable<BestSellDTO[]> {
    return this._client.collection<BestSellDTO>('best-sells').valueChanges(({idField: 'id'}));
  }
}
