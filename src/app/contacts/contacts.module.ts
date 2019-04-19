import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContactsPage } from './contacts.page';
import { StoreModule } from '@ngrx/store';
import {contactReducer} from "../reducers/contact.reducer";

const routes: Routes = [
  {
    path: '',
    component: ContactsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      StoreModule.forRoot({items: contactReducer}),
    RouterModule.forChild(routes)
  ],
  declarations: [ContactsPage]
})
export class ContactsPageModule {}
