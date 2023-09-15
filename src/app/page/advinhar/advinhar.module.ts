import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvinharPageRoutingModule } from './advinhar-routing.module';

import { AdvinharPage } from './advinhar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvinharPageRoutingModule
  ],
  declarations: [AdvinharPage]
})
export class AdvinharPageModule {}
