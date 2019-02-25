import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexPage } from './index.page';
import { IndexRoutingModule } from './index-routing.module';
import { HomePageModule } from '../home/home.module';
import { WordViewPageModule } from '../word-view/word-view.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageModule,
    WordViewPageModule,
    // RouterModule.forChild(routes)
    IndexRoutingModule
  ],
  declarations: [IndexPage]
})
export class IndexPageModule { }
