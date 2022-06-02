import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseHeroPhotoService } from './firebase-hero-photo.service';
import { GETS_ONE_ABOUT_HERO_DTO } from '../../../application/ports/secondary/dto/gets-one-about-hero.dto-port';
import { GETS_ALL_ABOUT_HERO_DTO } from '../../../application/ports/secondary/dto/gets-all-about-hero.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseHeroPhotoService, { provide: GETS_ONE_ABOUT_HERO_DTO, useExisting: FirebaseHeroPhotoService }, { provide: GETS_ALL_ABOUT_HERO_DTO, useExisting: FirebaseHeroPhotoService }],
  	exports: [] })
export class FirebaseHeroPhotoServiceModule {
}
