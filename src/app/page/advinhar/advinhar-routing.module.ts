import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvinharPage } from './advinhar.page';

const routes: Routes = [
  {
    path: '',
    component: AdvinharPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvinharPageRoutingModule {}
