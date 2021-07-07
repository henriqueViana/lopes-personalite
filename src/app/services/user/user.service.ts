import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public setUser(data) {
    localStorage.setItem('user', JSON.stringify(data))
  }

  public getUser() {
    return JSON.parse(localStorage.getItem('user'))
  }
}
