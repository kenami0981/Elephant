import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { FirebaseNavigationServiceModule, NavComponentModule } from '@navigation';
import { HeroComponentModule } from 'projects/hero/src/lib/adapters/primary/ui/hero.component-module';
import { FirebaseProductsServiceModule } from 'projects/products/src/lib/adapters/secondary/infrastructure/firebase-products.service-module';
import { FirebaseHeroTextsServiceModule } from 'projects/hero/src/lib/adapters/secondary/infrastructure/firebase-hero-texts.service-module';


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
    FirebaseNavigationServiceModule,
    HeroComponentModule,
    FirebaseProductsServiceModule,
    FirebaseHeroTextsServiceModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
