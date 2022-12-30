import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversiteServiceService {
  url2 = 'http://localhost:8289';
  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(`${this.url2}/afficheUniversity`);
  }
  addUniversite(p: any): Observable<any> {
    return this.http.post(`${this.url2}/addUniversity`, p)
  }
  getById(id: any): Observable<any> {
    return this.http.get(`${this.url2}/University/${id}`);

  }

  delet(id:any):Observable<any>{
    return this.http.delete(`${this.url2}/University/${id}`)
   }
   
   update(body:any,id:any):Observable<any>{
     return this.http.put(`${this.url2}/University/${id}`,body)
   }
}
