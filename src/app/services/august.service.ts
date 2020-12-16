import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AugustService {

  constructor(public fireservices:AngularFirestore) { }
  createbudget(Value)
  {
    return this.fireservices.collection('Aug').add(Value);
  }

  getbudget()
  {
    return this.fireservices.collection('Aug').snapshotChanges();
  }

  update_data(Id,Data)
  {
    this.fireservices.doc('Aug/'+Id).update(Data);

  }
  deletebudget(Id)
  {
    this.fireservices.doc('Aug/' + Id).delete();
  }
}
