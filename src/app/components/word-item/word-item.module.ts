import { NgModule } from '@angular/core';
import { WordItemComponent } from './word-item.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [WordItemComponent],
  imports: [
    IonicModule,
    RouterModule
  ],
  exports: [WordItemComponent]
})
export class WordItemModule { }
