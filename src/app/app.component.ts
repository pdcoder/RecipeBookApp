import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCQpFkhEfzhEY3FoOMCBzstkBWvrADvXp8",
      authDomain:"recipebook-6fa7f.firebaseapp.com"
    });
  }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
