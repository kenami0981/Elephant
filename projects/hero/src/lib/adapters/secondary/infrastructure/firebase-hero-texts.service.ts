import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GetsOneHeroTextDtoPort } from '../../../application/ports/secondary/gets-one-hero-text.dto-port';
import { HeroDTO } from '../../../application/ports/secondary/hero.dto';

@Injectable()
export class FirebaseHeroTextsService implements GetsOneHeroTextDtoPort {
  constructor(private _client: AngularFirestore) {}

  getOne(id: string): Observable<HeroDTO> {
    return this._client
      .doc<HeroDTO>('hero-texts/' + id)
      .valueChanges({ idField: 'id' }) as Observable<HeroDTO>;
  }
}
