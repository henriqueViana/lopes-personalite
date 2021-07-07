import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = 'http://ec2-34-200-238-225.compute-1.amazonaws.com:8080/login/sign-in'
  
  constructor(private http: HttpClient) { }

  public login(body) {
    return this.http.post(this.url, body)
  }
}
