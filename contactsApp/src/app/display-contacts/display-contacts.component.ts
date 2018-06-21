import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ContactServiceService } from './contact-service.service';

@Component({
  selector: 'app-display-contacts',
  templateUrl: './display-contacts.component.html',
  styleUrls: ['./display-contacts.component.css']
})
export class DisplayContactsComponent implements OnInit {

  constructor(private http: Http, private serv: ContactServiceService) { }
  contacts = [];
  selectedContact = {};
  selectedIndex = null;
  ngOnInit() {
    var self = this;
    var storedCnts = this.serv.getAllContacts();
    if(storedCnts.length == 0) {
      this.http.get("data/users.json").toPromise().then((data) => {
        self.contacts = data.json();
        this.serv.setAllContacts(self.contacts);
      })
    } else {
      this.contacts = storedCnts;
    }
  }
  deleteContact(contact) {
    //Ajax call to delete the record and after succesfull deletion alert success;
    let index = this.contacts.indexOf(contact);
    this.contacts.splice(index,1)
    alert("Contact "+contact.FirstName+" deleted successfully ");
  }

  editContact(contact) {
    this.serv.setCurrentContact(contact);
  }

  addContact($event) {
    this.contacts.push($event);
    alert("Contact added successfully with name "+$event.FirstName+' '+$event.LastName);
  }

}
