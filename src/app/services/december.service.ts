import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DecemberService {

  constructor(public fireservices:AngularFirestore) { }
  createbudget(Value)
  {
    return this.fireservices.collection('Dec').add(Value);
  }

  getbudget()
  {
    return this.fireservices.collection('Dec').snapshotChanges();
  }

  update_data(Id,Data)
  {
    this.fireservices.doc('Dec/'+Id).update(Data);

  }
  deletebudget(Id)
  {
    this.fireservices.doc('Dec/' + Id).delete();
  }
}
