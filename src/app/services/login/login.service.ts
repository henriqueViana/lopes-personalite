import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILoginResponse } from 'src/app/interfaces/ILoginResponse';
import { ILoginRequest } from 'src/app/interfaces/ILoginRequest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = 'http://ec2-34-200-238-225.compute-1.amazonaws.com:8080/login/sign-in'
  
  constructor(private http: HttpClient) { }

  public login(body: ILoginRequest): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(this.url, body)
  }
}
