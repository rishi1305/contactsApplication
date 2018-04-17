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
  contacts = {};
  selectedContact = {};
  ngOnInit() {
    var self = this;
    this.http.get("data/users.json").toPromise().then((data) => {
      self.contacts = data.json();
    })
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
    this.showList = false;
    this.edit = true;
    this.addNew = false;
  }
  deleteContact(contact) {
    //Ajax call to delete the record and after succesfull deletion alert success;
    alert("Contact "+contact.FirstName+" deleted successfully ");
  }
}
