import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupeServiseService {
  url2='http://localhost:8289';
  constructor(private http: HttpClient) { }
  getAll():Observable<any>{
    return this.http.get(`${this.url2}/afficheGpr`);
  }
  addGroupes(p: any):Observable<any>{
    return this.http.post(`${this.url2}/addGpr`,p)
  }
getId(id:any):Observable<any>{
  return this.http.get(`${this.url2}/Gpr/${id}`)
}
delet(id:any):Observable<any>{
 return this.http.delete(`${this.url2}/Gpr/${id}`)
}

update(body:any,id:any):Observable<any>{
  return this.http.put(`${this.url2}/Gpr/${id}`,body)
}
}
