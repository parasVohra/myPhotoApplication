import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: Observable<firebase.User | null>;

  constructor(public firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
    this.user.subscribe((userInfo) => {
      if (userInfo !== null) {
        console.log('User info is available', userInfo.getIdToken());

        this.storeIdToken(userInfo.getIdToken());
      }
    });
  }

  storeIdToken(idToken: Promise<string>) {
    idToken.then((idTokenValue) => {
      localStorage.setItem('userIdToken', idTokenValue);
      console.log('Id Token Value', localStorage.getItem('userIdToken'));
    });
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((value: any) => {
        console.log('Success!', value);
      })
      .catch((err: any) => {
        console.log('Something went wrong:', err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((value: any) => {
        console.log('Nice, it worked!');
      })
      .catch((err: any) => {
        console.log('Something went wrong:', err.message);
      });
  }

  logout() {
    this.firebaseAuth
      .signOut()
      .then((value: any) => {
        console.log('Signed Out successful ');
        localStorage.removeItem('userIdToken');
      })
      .catch((err: any) => {
        console.log('Something went wrong:', err.message);
      });
  }
}
