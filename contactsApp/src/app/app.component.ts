import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: Http) {}
  title = 'Contacts app';
  showList = true;
  addNew = false;
  edit = false;
  contacts = [];
  selectedContact = {};
  selectedIndex = null;
  ngOnInit() {
    var self = this;
    if(this.contacts.length == 0) {
      this.http.get("data/users.json").toPromise().then((data) => {
        self.contacts = data.json();
      })
    }
  }
  list() {
    this.showList = true;
    this.addNew = false;
    this.edit=false;
  }
  addNewContact() {
    this.showList = false;
    this.edit = false;
    this.addNew = true;
  }
  editContact(contact){
    this.selectedContact = contact;
    this.selectedIndex = this.contacts.indexOf(contact);
    this.showList = false;
    this.edit = true;
    this.addNew = false;
  }
  deleteContact(contact) {
    //Ajax call to delete the record and after succesfull deletion alert success;
    let index = this.contacts.indexOf(contact);
    this.contacts.splice(index,1)
    alert("Contact "+contact.FirstName+" deleted successfully ");
  }

  receiveContact($event){
    this.contacts[this.selectedIndex] = $event;
    this.selectedIndex = null;
    this.showList = true;
    this.edit = false;
    alert("Contact editted successfully");
  }

  addContact($event) {
    this.contacts.push($event);
    this.showList = true;
    this.addNew = false;
    alert("Contact added successfully with name "+$event.FirstName+' '+$event.LastName);
  }
}
