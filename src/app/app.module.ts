import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { routing } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { EducatorbarComponent } from './educatorbar/educatorbar.component';
import { LogobarComponent } from './logobar/logobar.component';
import { MainsiteComponent } from './mainsite/mainsite.component';
import { BookDetailComponent } from './book-detail/book-detail.component';




export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  projectId: masterFirebaseConfig.projectId,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
};

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    MarketplaceComponent,
    NavbarComponent,
    EducatorbarComponent,
    LogobarComponent,
    MainsiteComponent,
    BookDetailComponent,

  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,


  ],

  providers: [AuthService],

  bootstrap: [AppComponent]
})
export class AppModule { }
