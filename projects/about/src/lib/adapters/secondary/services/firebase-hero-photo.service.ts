import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GetsOneAboutHeroDtoPort } from '../../../application/ports/secondary/dto/gets-one-about-hero.dto-port';
import { GetsAllAboutHeroDtoPort } from '../../../application/ports/secondary/dto/gets-all-about-hero.dto-port';
import { AboutHeroDTO } from '../../../application/ports/secondary/dto/about-hero.dto';

@Injectable()
export class FirebaseHeroPhotoService implements GetsOneAboutHeroDtoPort, GetsAllAboutHeroDtoPort {
  constructor(private _client: AngularFirestore) {}

  getOne(id: string): Observable<AboutHeroDTO> {
    return this._client
      .doc<AboutHeroDTO>('about-hero/' + id)
      .valueChanges({ idField: 'id' })
      .pipe(
        switchMap((item) =>
          item
            ? of(item)
            : throwError(new Error('Item does not exist in firebase'))
        )
      );
  }

  getAll(): Observable<AboutHeroDTO[]> {
    return this._client.collection<AboutHeroDTO>('about-featured').valueChanges(({idField: 'id'}));
  }
}
