import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  edit(contact){
    //Ajax call to edit the contact in the database
    this.editEvent.emit(contact);
  }
  @Input() contact; 

  @Output() editEvent = new EventEmitter<any>();

}
