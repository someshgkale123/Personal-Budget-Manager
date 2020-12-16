import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OctoberService {

  constructor(public fireservices:AngularFirestore) { }
  createbudget(Value)
  {
    return this.fireservices.collection('Oct').add(Value);
  }

  getbudget()
  {
    return this.fireservices.collection('Oct').snapshotChanges();
  }

  update_data(Id,Data)
  {
    this.fireservices.doc('Oct/'+Id).update(Data);

  }
  deletebudget(Id)
  {
    this.fireservices.doc('Oct/' + Id).delete();
  }
}
