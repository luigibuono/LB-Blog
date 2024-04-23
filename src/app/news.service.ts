import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = 'https://newsapi.org/v2/everything?q=tesla&from=2024-03-23&sortBy=publishedAt&apiKey=b759c4e7e9e448fcb92dbcd4bad66e53';


  private apiUrl2 = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=acacb96ba43678e76530033b7ebd39e2';

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getGNews(): Observable<any> {
    return this.http.get<any>(this.apiUrl2);
  }

}
