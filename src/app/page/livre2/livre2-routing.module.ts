import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Livre2Page } from './livre2.page';

const routes: Routes = [
  {
    path: '',
    component: Livre2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Livre2PageRoutingModule {}
