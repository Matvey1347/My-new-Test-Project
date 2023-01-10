import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsCreateComponent } from './news-create/news-create.component';
import { NewsComponent } from './news.component';

const routes: Routes = [
  { path: ':id', component: NewsComponent },
  { path: 'create', component: NewsCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
