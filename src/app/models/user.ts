import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserFromApi, UserToList } from '../shared/interfaces/user-from-api';


@Injectable({
  providedIn: 'root'
})
export class UserModel {

  private baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getUsersByName(name: string) {
    return this.http.get<UserFromApi[]>(`${this.baseUrl}/users?=${name}`).pipe(
      map<UserFromApi[], UserToList[]>((users) => 
          users.map(({login, id, url}) => ({
            name: login,
            id,
            url
          })
        )
      ),
      map<UserToList[], UserToList[]>(users => users.splice(0, 10))
      )
  }

}
