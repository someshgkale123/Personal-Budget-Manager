import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AprilService {

  constructor(public fireservices:AngularFirestore) { }
  createbudget(Value)
  {
    return this.fireservices.collection('Apr').add(Value);
  }

  getbudget()
  {
    return this.fireservices.collection('Apr').snapshotChanges();
  }

  update_data(Id,Data)
  {
    this.fireservices.doc('Apr/'+Id).update(Data);

  }
  deletebudget(Id)
  {
    this.fireservices.doc('Apr/' + Id).delete();
  }
}
