import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexPage } from './index.page';
import { HomePage } from '../home/home.page';
import { WordViewPage } from '../word-view/word-view.page';
// import { HomePage } from './home.page';


const routes: Routes = [
  {
    path: 'index',
    component: IndexPage,
    children: [
      {
        path: 'home',
        outlet: 'main',
        component: HomePage
      },
      {
        path: 'definition/:id',
        outlet: 'main',
        component: WordViewPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/index/(main:home)',
    pathMatch: 'full'
  },
  {
    path: '**'
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class IndexRoutingModule { }
