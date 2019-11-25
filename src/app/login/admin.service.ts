import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { admin } from './admin';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
private dbPath = '/admin';
 
  customersRef: AngularFirestoreCollection<admin> = null;
  constructor(private db: AngularFirestore) {
    this.customersRef = db.collection(this.dbPath);
  }

   createCustomer(admin: admin): void {
    this.customersRef.add({...admin});
    debugger;
  }
}
