import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SeptemberService {

  constructor(public fireservices:AngularFirestore) { }
  createbudget(Value)
  {
    return this.fireservices.collection('Sept').add(Value);
  }

  getbudget()
  {
    return this.fireservices.collection('Sept').snapshotChanges();
  }

  update_data(Id,Data)
  {
    this.fireservices.doc('Sept/'+Id).update(Data);

  }
  deletebudget(Id)
  {
    this.fireservices.doc('Sept/' + Id).delete();
  }
}
