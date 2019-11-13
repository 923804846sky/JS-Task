import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page.component';
import { ArticleComponent}from'./article/article.component'
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { 
    path: '', component: PageComponent,
    children:[
      {path:'article',component:ArticleComponent},
      {path:'detail',component:DetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PageRoutingModule {}
