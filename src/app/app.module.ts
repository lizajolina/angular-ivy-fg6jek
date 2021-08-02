import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { camerakit } from 'camerakit';

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
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

async function () {
  const devices = await camerakit.getDevices();
 
  const preview = await camerakit.createCaptureStream({
    audio: devices.audio[0],
    video: devices.video[0]
  });
 
  preview.setResolution({width: 1920, height: 1080});
  const myPicture = preview.shutter.capture();
 
  preview.recorder.start();
 
  // Wait...
 
  // Pause the recording & resume
  await preview.recorder.pause();
  await preview.recorder.start();
 
  // Wait some more...
 
  const recordedVideo = await preview.recorder.stop(); // Use the video yourself
 
  preview.recorder.downloadLatestRecording(); // Download the video direct from browser
 
  // Stop using camera
  preview.destroy();
 
  // Play video via camerakit player
  const player = new camerakit.Player();
  player.src = window.URL.createObjectURL(recordedVideo);
 
  // Use the video player wherever you want!
  document.getElementById("your-player-container").appendChild(player);
  player.play();
}

