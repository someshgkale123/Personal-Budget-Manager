
import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: any = null;
  public timeout;

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
    clearTimeout(this.timeout);
    this.router.navigate(['/login']);
  }
}
