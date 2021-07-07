import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISignupResponse } from 'src/app/interfaces/ISignupResponse';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private url: string = 'http://ec2-34-200-238-225.compute-1.amazonaws.com:8080/login/sign-up'
  
  constructor(private http: HttpClient) { }

  public signup(body): Observable<ISignupResponse> {
    return this.http.post<ISignupResponse>(this.url, body)
  }
}
