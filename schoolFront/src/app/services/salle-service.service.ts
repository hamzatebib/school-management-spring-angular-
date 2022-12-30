import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalleServiceService {
  url2='http://localhost:8289';
  constructor(private http: HttpClient) { }
  getAll():Observable<any>{
    return this.http.get(`${this.url2}/afficheSalles`);
  }
  addSalles(p: any):Observable<any>{
    return this.http.post(`${this.url2}/addSalles`,p)
}
getId(id:any):Observable<any>{
  return this.http.get(`${this.url2}/Salles/${id}`)
}
delet(id:any):Observable<any>{
 return this.http.delete(`${this.url2}/Salles/${id}`)
}

update(body:any,id:any):Observable<any>{
  return this.http.put(`${this.url2}/Salles/${id}`,body)
}
}