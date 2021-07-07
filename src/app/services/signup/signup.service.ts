import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private url: string = 'http://ec2-34-200-238-225.compute-1.amazonaws.com:8080/login/sign-up'
  
  constructor(private http: HttpClient) { }

  public signup(body) {
    return this.http.post(this.url, body)
  }
}
