import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../display-contacts/contact-service.service';


@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contact = {};
  constructor(private serv: ContactServiceService) { }

  ngOnInit() {
    this.contact = this.serv.getCurrentContact();
  }
  edit(contact){
    //Ajax call to edit the contact in the database
    this.serv.editCurrentContact(contact);
    alert("Contact Editted Succesfully");
  }

}
