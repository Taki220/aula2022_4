import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Livre2PageRoutingModule } from './livre2-routing.module';

import { Livre2Page } from './livre2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Livre2PageRoutingModule
  ],
  declarations: [Livre2Page]
})
export class Livre2PageModule {}
