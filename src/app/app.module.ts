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

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(masterFirebaseConfig.firebase),
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
