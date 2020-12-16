import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class JuneService {

  constructor(public fireservices:AngularFirestore) { }
  createbudget(Value)
  {
    return this.fireservices.collection('June').add(Value);
  }

  getbudget()
  {
    return this.fireservices.collection('June').snapshotChanges();
  }

  update_data(Id,Data)
  {
    this.fireservices.doc('June/'+Id).update(Data);

  }
  deletebudget(Id)
  {
    this.fireservices.doc('June/' + Id).delete();
  }
}
