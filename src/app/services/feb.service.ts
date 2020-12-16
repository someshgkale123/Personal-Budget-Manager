import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FebService {

  constructor(public fireservices:AngularFirestore) { }
  createbudget(Value)
  {
    return this.fireservices.collection('Feb').add(Value);
  }

  getbudget()
  {
    return this.fireservices.collection('Feb').snapshotChanges();
  }

  update_data(Id,Data)
  {
    this.fireservices.doc('Feb/'+Id).update(Data);

  }
  deletebudget(Id)
  {
    this.fireservices.doc('Feb/' + Id).delete();
  }
}
