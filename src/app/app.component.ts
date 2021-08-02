import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
firebase: {
  apiKey: "AIzaSyDelhNACQSEcFFKZICjXlvxLPuJRz_h6G4",
  authDomain: "dogwood-harmony-321706.firebaseapp.com",
  projectId: "dogwood-harmony-321706",
  storageBucket: "dogwood-harmony-321706.appspot.com",
  messagingSenderId: "281819462711",
  appId: "1:281819462711:web:d423044d0c32d76ae813b2",
  measurementId: "G-8DWFXEMBQR"
}
}
