import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ILeadsResponse } from 'src/app/interfaces/ILeadsResponse';


@Injectable({
  providedIn: 'root'
})
export class LeadsService {

  private url: string = 'http://ec2-34-200-238-225.compute-1.amazonaws.com:8080/'

  constructor(private http: HttpClient) { }

  public getLeadsById(idCorretor): Observable<ILeadsResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    return this.http.get<ILeadsResponse>(`${this.url}corretor/${idCorretor}/leads`, { headers })
  }

  public getLeadsToBuy(idCorretor): Observable<ILeadsResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    return this.http.get<ILeadsResponse>(`${this.url}lead/disponivel/regiao/${idCorretor}`, { headers })
  }
}
