import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../display-contacts/contact-service.service';

@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.component.html',
  styleUrls: ['./add-new-contact.component.css']
})
export class AddNewContactComponent implements OnInit {

  constructor(private serv: ContactServiceService) { }

  ngOnInit() {
  }
  addNewContact(contact) {
    // Here the ajax call to the server is needed to add the contact
    this.serv.addNewContact(contact);
    alert(`Contact with Name ${contact.FirstName} added Successfully`);
  }

}
