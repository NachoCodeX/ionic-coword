import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ApolloModule } from 'apollo-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { RouterModule } from '@angular/router';
import { WordItemModule } from 'src/app/components/word-item/word-item.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApolloModule,
    FontAwesomeModule,
    RouterModule,
    WordItemModule
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
