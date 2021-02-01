import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../service/api.service';
import {Article} from '../../model/article.model';

@Component({
  selector: 'tw-article',
  templateUrl: './article.component.html'
})
export class ArticleComponent implements OnInit {

  article: Article;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.getArticle();
  }

  getArticle() {
    this.apiService.getArticle()
      .subscribe(value => {
        this.article = value;
      }, error => {
        this.apiService.getLocalArticle()
          .subscribe(value1 => {
            this.article = value1; });
      });
  }
}
