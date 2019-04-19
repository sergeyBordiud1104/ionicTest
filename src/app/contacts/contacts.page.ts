import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs";

export interface ContactsState {
    src: string;
    name: string;
    description: string;
    status: boolean
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})

export class ContactsPage implements OnInit {
    items$: Observable<any>;
  
  constructor(private store: Store<{ items: [ContactsState]}>) {
      this.items$ = store.select(state => state.items);
  }

  ngOnInit() {
  
  }

}
