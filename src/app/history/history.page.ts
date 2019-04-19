import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";

export interface HistoryState {
    src: string;
    name: string;
    number: string;
    date: string;
    time: string
}

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
    items$: Observable<any>;

  constructor(private store: Store<{ items: [HistoryState]}>) {
      this.items$ = store.select(state => state.items);
  }

  ngOnInit() {
  }

}
