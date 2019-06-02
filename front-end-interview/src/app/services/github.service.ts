import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  
  public base_url: String = 'https://api.github.com/users';
  constructor(private http: HttpClient) { }
  
  getUserData(user: String): Observable<User> {
    return this.http.get<User>(this.base_url + "/" + user);
  }
  
  getReposUser(user: String): Observable<any> {
    return this.http.get<any>(this.base_url + "/" + user +"/repos");
  }
}
