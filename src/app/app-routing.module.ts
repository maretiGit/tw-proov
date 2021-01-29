import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticleComponent} from './component/article/article.component';
import {ListComponent} from './component/list/list.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'list', component: ListComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
