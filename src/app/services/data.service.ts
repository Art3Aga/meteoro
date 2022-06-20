import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(private _firestore: AngularFirestore) {}

  getData(): Observable<any[]> {
    return this._firestore.collection('sensor_data').valueChanges();
  }

  filterByDate(date: string) {
    return this._firestore.collection('sensor_data', ref => ref.where('fecha', '==', new Date(date))).valueChanges();
  }

  getDataPromise() {
    return this._firestore.collection('sensor_data').get().toPromise();
  }
}
