
import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import{JanuaryComponent} from '../january/january.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: any = null;


  constructor(public au: AngularFireAuth, private router: Router){
    this.au.authState.subscribe((auth => {
      this.authState = auth;
    }));
  }

  registeremail(email: string, password: string)
  {

    return this.au.createUserWithEmailAndPassword(email, password).then((user) =>
    {
      this.authState = user;
      document.cookie=user.user.uid;

    }).catch(error =>
      {
        console.log(error);
        throw error;
      });
  }
  loginemail(email: string, password: string)
  {
    return this.au.signInWithEmailAndPassword(email, password).then((user) =>
    {
      this.authState = user;
      document.cookie=user.user.uid;

    }).catch(error =>
      {
        console.log(error);
        throw error;
      });
  }

  signout(): void
  {
    this.au.signOut();
    this.router.navigate(['/login']);
  }
}
