import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {List} from '../model/list.model';
import {Article} from '../model/article.model';
import {environment} from '../../environments/environment';

@Injectable()
export class ApiService {

  readonly baseUrl = environment.apiUrl;
  // tslint:disable-next-line:variable-name
  private _articleJsonURL = 'assets/jsons/article.json';
  // tslint:disable-next-line:variable-name
  private _listJsonURL = 'assets/jsons/list.json';

  constructor(private http: HttpClient) {
  }

  getList(): Observable<List> {
    return this.http.get<List>(this.baseUrl + 'list.json');
  }

  getArticle(): Observable<Article> {
    return this.http.get<Article>(this.baseUrl + 'article.json');
  }

  getLocalList(): Observable<List> {
    return this.http.get<List>(this._listJsonURL);
  }

  getLocalArticle(): Observable<Article> {
    return this.http.get<Article>(this._articleJsonURL);
  }
}


