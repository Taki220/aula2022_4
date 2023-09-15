import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WikiminecraftPage } from './wikiminecraft.page';

const routes: Routes = [
  {
    path: '',
    component: WikiminecraftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WikiminecraftPageRoutingModule {}
