import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { NavComponentModule } from '@navigation';
import { HeroComponentModule } from 'projects/hero/src/lib/adapters/primary/ui/hero.component-module';
import { FirebaseProductsServiceModule } from 'projects/products/src/lib/adapters/secondary/infrastructure/firebase-products.service-module';
import { FirebaseHeroTextsServiceModule } from 'projects/hero/src/lib/adapters/secondary/infrastructure/firebase-hero-texts.service-module';
import { FirebaseBenefitsServiceModule } from '@benefit';
import { FirebasePromotionsServiceModule } from '@promo';
import { FirebaseTestimonialsServiceModule } from '@testimonials';
import { FirebaseFoundersServiceModule } from '@founders';
import { FirebaseFooterBottomServiceModule, FirebaseFooterFormServiceModule, FirebaseFooterIconsServiceModule, FirebaseFooterTextsServiceModule } from '@footer';
import { FirebaseHeroPhotoServiceModule } from '@about';
import { FirebaseProductsHeaderServiceModule, SingleProductComponentModule } from '@products';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebasestoreConfig),
    NavComponentModule,
    HeroComponentModule,
    FirebaseProductsServiceModule,
    FirebaseHeroTextsServiceModule,
    FirebaseBenefitsServiceModule,
    FirebasePromotionsServiceModule,
    FirebaseTestimonialsServiceModule,
    FirebaseFoundersServiceModule,
    FirebaseFooterTextsServiceModule,
    FirebaseFooterFormServiceModule,
    FirebaseHeroPhotoServiceModule,
    FirebaseProductsHeaderServiceModule,
    FirebaseFooterBottomServiceModule,
    FirebaseFooterIconsServiceModule,




    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
