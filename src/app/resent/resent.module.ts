import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResentPage } from './resent.page';
import {StoreModule} from "@ngrx/store";
import {resentReducer} from "../reducers/resent.reducer";

const routes: Routes = [
  {
    path: '',
    component: ResentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      StoreModule.forRoot({items: resentReducer}),
    RouterModule.forChild(routes)
  ],
  declarations: [ResentPage]
})
export class ResentPageModule {}
