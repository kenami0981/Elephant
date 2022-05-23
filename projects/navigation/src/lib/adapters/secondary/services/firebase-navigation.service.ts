import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GetsAllNavigationDtoPort } from '../../../application/ports/secondary/dto/gets-all-navigation.dto-port';
import { NavigationDTO } from '../../../application/ports/secondary/dto/navigation.dto';

@Injectable()
export class FirebaseNavigationService implements GetsAllNavigationDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(): Observable<NavigationDTO[]> {
    return this._client.collection<NavigationDTO>('nav').valueChanges(({idField: 'id'}));
  }
}
