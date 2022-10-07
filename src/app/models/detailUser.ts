import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DetailUserModel {

  private baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getUserByName(name:string) {
    return this.http.get(`${this.baseUrl}/users/${name}`);
  }

}
