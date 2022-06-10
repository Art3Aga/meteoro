import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(private _firestore: AngularFirestore) {}

  getData(): Observable<any[]> {
    return this._firestore.collection('aspersor_1').valueChanges();
  }
}
