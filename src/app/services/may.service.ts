import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MayService {

  constructor(public fireservices:AngularFirestore) { }
  createbudget(Value)
  {
    return this.fireservices.collection('May').add(Value);
  }

  getbudget()
  {
    return this.fireservices.collection('May').snapshotChanges();
  }

  update_data(Id,Data)
  {
    this.fireservices.doc('May/'+Id).update(Data);

  }
  deletebudget(Id)
  {
    this.fireservices.doc('May/' + Id).delete();
  }
}
