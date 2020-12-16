import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class JanserviceService {

  constructor(public fireservices:AngularFirestore) { }
  createbudget(Value)
  {
    return this.fireservices.collection('Jan').add(Value);
  }

  getbudget()
  {
    return this.fireservices.collection('Jan').snapshotChanges();
  }

  update_data(Id,Data)
  {
    this.fireservices.doc('Jan/'+Id).update(Data);

  }
  deletebudget(Id)
  {
    this.fireservices.doc('Jan/' + Id).delete();
  }


}
