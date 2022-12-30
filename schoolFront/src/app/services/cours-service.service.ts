import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursServiceService {
  url2 = "http://localhost:8289";
  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(`${this.url2}/affichecour`);
  }
  addCours(p: any): Observable<any> {
    return this.http.post(`${this.url2}/addcour`, p)
  }
  getById(id: any): Observable<any> {
    return this.http.get(`${this.url2}/cour/${id}`);

  }

  delet(id:any):Observable<any>{
    return this.http.delete(`${this.url2}/cour/${id}`)
   }
   
   update(body:any,id:any):Observable<any>{
     return this.http.put(`${this.url2}/cour/${id}`,body)
   }
}
