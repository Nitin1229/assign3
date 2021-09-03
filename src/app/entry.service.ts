import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor() { }
  details= {
    name:'',
    email:'',
    password: '',
    mob: '',
    city:'',
    familyMembers:[{
      name:'',
      relation:''
    }]
  }
}
