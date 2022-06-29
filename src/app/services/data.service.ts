import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType, HttpEvent, HttpRequest } from '@angular/common/http';
import { tap, map, catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private url: string = 'https://api.thingspeak.com/channels/1778580/feeds.json?api_key=QY24F2694Q2D74TH';

  constructor(private _firestore: AngularFirestore, private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this._firestore.collection('sensor_data', ref => ref.orderBy('fecha', 'desc')).valueChanges();
  }

  filterByDate(start: any, end: any): Observable<any[]> {
    return this._firestore.collection('sensor_data', ref => ref.where('fecha', '>=', start).where('fecha', '<=', end).orderBy('fecha', 'desc')).valueChanges();
  }

  getDataPromise() {
    return this._firestore.collection('sensor_data', ref => ref.orderBy('fecha', 'desc')).get().toPromise();
  }

  getDataFromThingSpeak() {
    return this.http.get<any>(this.url).pipe(
      tap(data => JSON.stringify(data)),
    );
  }
}
