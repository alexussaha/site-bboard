import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Bbs } from './models';
import { Bb } from './models';
import { Comments } from './models';

@Injectable({
  providedIn: 'root'
})
export class BbService {
  private url: String = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getBbs(): Observable<Bbs[]> {
    return this.http.get<Bbs[]>(this.url + '/api/bbs/');
  }

  getBb(pk: Number): Observable<Bb> {
    return this.http.get<Bb>(this.url + '/api/bbs/' + pk);
  }

  handleError() {
    return (error: any): Observable<Object | null> => {
      window.alert(error.message);
      return of(null);
    }
  }

  addComment(bb: Number, author: String, password: String, content: String): Observable<Object | null> {
    const comment = { 'bb': bb, 'author': author, 'content': content };
    const options = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Autharization': 'Basic ' + window.btoa(author + ':' + password)
        }
      )
    };
    return this.http.post<Object>(this.url + '/api/bbs/' + bb + '/comments/', comment, options).pipe(catchError(this.handleError()));
  }

  getComments(pk: Number): Observable<Comments[]> {
    return this.http.get<Comments[]>(this.url + '/api/bbs/' + pk + '/comments');
  }
}
