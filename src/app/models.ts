
 export class User {
  id?: string;
  name?: string;
  companyId?: string;
  company?: firebase.firestore.DocumentReference;
}
 export class Company {
  name?: string;
  id?: string;  
}