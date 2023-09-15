import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Livre1Page } from './livre1.page';

const routes: Routes = [
  {
    path: '',
    component: Livre1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Livre1PageRoutingModule {}
