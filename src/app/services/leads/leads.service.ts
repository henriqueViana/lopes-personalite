import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ILeadsResponse } from 'src/app/interfaces/ILeadsResponse';
import { BehaviorSubject } from 'rxjs';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
});

@Injectable({
  providedIn: 'root',
})
export class LeadsService {
  subject = new Subject();

  private url: string =
    'http://ec2-34-200-238-225.compute-1.amazonaws.com:8080/';

  constructor(private http: HttpClient) {}

  public getLeadsById(idCorretor): Observable<ILeadsResponse> {
    return this.http.get<ILeadsResponse>(`${this.url}corretor/${idCorretor}/leads`, {
      headers,
    });
  }

  public getLeadsToBuy(idCorretor): Observable<ILeadsResponse> {
    return this.http.get<ILeadsResponse>(
      `${this.url}lead/disponivel/regiao/${idCorretor}`,
      { headers }
    );
  }

  reserveLead(idCorretor, lead): Observable<any> {
    return this.http.post<any>(
      `${this.url}/corretor/${idCorretor}/reservar/lead`,
      lead,
      { headers }
    );
  }
}
