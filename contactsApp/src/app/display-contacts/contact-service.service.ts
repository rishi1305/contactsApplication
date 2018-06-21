import { Injectable } from '@angular/core';

@Injectable()
export class ContactServiceService {

  constructor() { }
  private contacts = [];
  private currentContact = {};

  setAllContacts(contacts) {
      this.contacts = contacts;
  }

  getAllContacts() {
      return this.contacts;
  }

  addNewContact(contact) {
      this.contacts.push(contact);
  }

  setCurrentContact(contact){
      this.currentContact = contact;
  }

  getCurrentContact() {
      return this.currentContact;
  }

  editCurrentContact(contact) {
    this.contacts[this.contacts.indexOf(this.currentContact)] = contact;
  }
}
