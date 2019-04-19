import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";

export interface ResentState {
    src: string;
    name: string;
    date: string;
    text: string
}

@Component({
  selector: 'app-resent',
  templateUrl: './resent.page.html',
  styleUrls: ['./resent.page.scss'],
})
export class ResentPage implements OnInit {
    items$: Observable<any>;

  constructor(private store: Store<{ items: [ResentState]}>) {
      this.items$ = store.select(state => state.items);
  }

  ngOnInit() {
  }

}
