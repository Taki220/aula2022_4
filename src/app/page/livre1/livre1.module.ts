import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Livre1PageRoutingModule } from './livre1-routing.module';

import { Livre1Page } from './livre1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Livre1PageRoutingModule
  ],
  declarations: [Livre1Page]
})
export class Livre1PageModule {}
