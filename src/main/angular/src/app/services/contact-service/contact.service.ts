import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  static ENDPOINT_URL = 'http://localhost:8080/contacts/';
  constructor(private http: HttpClient) { }

  persist(contact: Contact) {
    console.log(contact);
    return this.http.post(ContactService.ENDPOINT_URL, contact);
  }

  get(id: number) {
    return this.http.get<Contact>(ContactService.ENDPOINT_URL + id);
  }

  getAll() {
    return this.http.get<Contact[]>(ContactService.ENDPOINT_URL);
  }
}
