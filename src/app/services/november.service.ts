import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NovemberService {

  constructor(public fireservices:AngularFirestore) { }
  createbudget(Value)
  {
    return this.fireservices.collection('Nov').add(Value);
  }

  getbudget()
  {
    return this.fireservices.collection('Nov').snapshotChanges();
  }

  update_data(Id,Data)
  {
    this.fireservices.doc('Nov/'+Id).update(Data);

  }
  deletebudget(Id)
  {
    this.fireservices.doc('Nov/' + Id).delete();
  }
}
