import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.component.html',
  styleUrls: ['./add-new-contact.component.css']
})
export class AddNewContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addNewContact(contact) {
    // Here the ajax call to the server is needed to add the contact
    alert("Contact added successfully with name "+contact.FirstName+' '+contact.LastName);
  }

}
