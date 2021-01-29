import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ArticleComponent} from './component/article/article.component';
import {ListComponent} from './component/list/list.component';
import {ApiService} from './service/api.service';
import {HttpClientModule} from '@angular/common/http';
import {TagComponent} from './component/tag/tag.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ListComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
