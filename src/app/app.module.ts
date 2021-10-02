import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgSelectModule } from "@ng-select/ng-select";
  
import { AppComponent } from "./app.component";
import { HelloComponent } from './hello.component';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// 2. Add your credentials from step 1
const config = {
  apiKey: "AIzaSyDelhNACQSEcFFKZICjXlvxLPuJRz_h6G4",
  authDomain: "dogwood-harmony-321706.firebaseapp.com",
  projectId: "dogwood-harmony-321706",
  storageBucket: "dogwood-harmony-321706.appspot.com",
  messagingSenderId: "281819462711",
  appId: "1:281819462711:web:d423044d0c32d76ae813b2",
  measurementId: "G-8DWFXEMBQR"
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, NgSelectModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}



