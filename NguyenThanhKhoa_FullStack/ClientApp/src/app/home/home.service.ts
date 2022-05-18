import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  public sendpostrequest(data: string) {
    return this.http.post<string[]>(this.baseUrl + 'api/sortarray', { Value: data });
  }

}