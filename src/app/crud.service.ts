import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireservices:AngularFirestore)
  {

  }

  createbudget(Value)
  {
    return this.fireservices.collection('Budget').add(Value);
  }

  getbudget()
  {
    return this.fireservices.collection('Budget').snapshotChanges();
  }

  update_data(Id,Data)
  {
    this.fireservices.doc('Budget/'+Id).update(Data);

  }
  deletebudget(Id)
  {
    this.fireservices.doc('Budget/' + Id).delete();
  }
}
