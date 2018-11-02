import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { routing } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { EducatorbarComponent } from './educatorbar/educatorbar.component';
import { LogobarComponent } from './logobar/logobar.component';
import { MainsiteComponent } from './mainsite/mainsite.component';




export const firebaseConfig = {
  apiKey: masterFirebaseConfig.firebase.apiKey,
  authDomain: masterFirebaseConfig.firebase.authDomain,
  databaseURL: masterFirebaseConfig.firebase.databaseURL,
  storageBucket: masterFirebaseConfig.firebase.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    MarketplaceComponent,
    NavbarComponent,
    EducatorbarComponent,
    LogobarComponent,
    MainsiteComponent

  ],

  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(masterFirebaseConfig.firebase),
    AngularFireAuthModule,
    FormsModule,
    routing
  ],

  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
