import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MarService {

  constructor(public fireservices:AngularFirestore) { }
  createbudget(Value)
  {
    return this.fireservices.collection('Mar').add(Value);
  }

  getbudget()
  {
    return this.fireservices.collection('Mar').snapshotChanges();
  }

  update_data(Id,Data)
  {
    this.fireservices.doc('Mar/'+Id).update(Data);

  }
  deletebudget(Id)
  {
    this.fireservices.doc('Mar/' + Id).delete();
  }
}
