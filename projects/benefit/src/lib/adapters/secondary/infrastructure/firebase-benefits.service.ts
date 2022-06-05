import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllBenefitDtoPort } from '../../../application/ports/secondary/gets-all-benefit.dto-port';
import { BenefitDTO } from '../../../application/ports/secondary/benefit.dto';
import { filterByCriterion } from '@lowgular/shared';

@Injectable()
export class FirebaseBenefitsService implements GetsAllBenefitDtoPort {
  constructor(private _client: AngularFirestore) {}

  getAll(criterion: Partial<BenefitDTO>): Observable<BenefitDTO[]> {
    return this._client
      .collection<BenefitDTO>('benefits')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: BenefitDTO[]) => filterByCriterion(data, criterion)));
  }
}
