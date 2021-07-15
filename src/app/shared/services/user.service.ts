import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from './abstract.service';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService extends AbstractService {
  private urlRoute = 'users';
  public cheiadeacasaluicristi: string;
  constructor(private http: HttpClient) {
    super();
   }

   list(data): Observable<UserModel[]> {
     return this.http.get<UserModel[]>(`${this.PUBLIC_URL}/${this.urlRoute}`, { params: data });
   }
}
