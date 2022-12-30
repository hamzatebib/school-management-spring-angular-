import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnseignantServiceService {
  url2 = 'http://localhost:8289';
  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(`${this.url2}/afficheEnseignats`);
  }
  addEnseignant(p: any): Observable<any> {
    return this.http.post(`${this.url2}/addEnseignats`, p)
  }
  getById(id: any): Observable<any> {
    return this.http.get(`${this.url2}/Enseignats/${id}`);

  }

  delet(id:any):Observable<any>{
    return this.http.delete(`${this.url2}/Enseignats/${id}`)
   }
   
   update(body:any,id:any):Observable<any>{
     return this.http.put(`${this.url2}/Enseignats/${id}`,body)
   }
}
