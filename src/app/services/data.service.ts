import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(private _firestore: AngularFirestore) {}

  getData(): Observable<any[]> {
    return this._firestore.collection('sensor_data', ref => ref.orderBy('fecha', 'desc')).valueChanges();
  }

  filterByDate(start: any, end: any): Observable<any[]> {
    return this._firestore.collection('sensor_data', ref => ref.where('fecha', '>=', start).where('fecha', '<=', end).orderBy('fecha', 'desc')).valueChanges();
  }

  getDataPromise() {
    return this._firestore.collection('sensor_data', ref => ref.orderBy('fecha', 'desc')).get().toPromise();
  }
}
