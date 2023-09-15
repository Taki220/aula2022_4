import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WikiminecraftPageRoutingModule } from './wikiminecraft-routing.module';

import { WikiminecraftPage } from './wikiminecraft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WikiminecraftPageRoutingModule
  ],
  declarations: [WikiminecraftPage]
})
export class WikiminecraftPageModule {}
