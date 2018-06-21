import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'


import { AppComponent } from './app.component';
import { AddNewContactComponent } from './add-new-contact/add-new-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { DisplayContactsComponent } from './display-contacts/display-contacts.component';

import { ContactServiceService } from './display-contacts/contact-service.service';


const appRoutes: Routes = [
  { path: "", component: DisplayContactsComponent },  
  { path: "edit", component: EditContactComponent },
  { path: "addNew", component: AddNewContactComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    AddNewContactComponent,
    EditContactComponent,
    DisplayContactsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ContactServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
