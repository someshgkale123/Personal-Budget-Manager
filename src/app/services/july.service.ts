import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class JulyService {

  constructor(public fireservices:AngularFirestore) { }
  createbudget(Value)
  {
    return this.fireservices.collection('July').add(Value);
  }

  getbudget()
  {
    return this.fireservices.collection('July').snapshotChanges();
  }

  update_data(Id,Data)
  {
    this.fireservices.doc('July/'+Id).update(Data);

  }
  deletebudget(Id)
  {
    this.fireservices.doc('July/' + Id).delete();
  }
}
