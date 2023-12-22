import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Working } from './working';

@Injectable({
  providedIn: 'root'
})
export class WorkingService {

  baseurl='http://localhost:4000/';
  constructor(private http:HttpClient) { }

  getall():Observable<Working[]>{
   return this.http.get<Working[]>(this.baseurl+'getall')
  }

  post(w:Working):Observable<Working>{
    return this.http.post<Working>(this.baseurl+'education',w);
  }

  delete(id:string):Observable<Working>{
    return this.http.delete<Working>(this.baseurl+'deleteid/'+id)
  }

  getbyId(id:string){
    return this.http.get<Working>(this.baseurl+'getbyid/'+id);
  }
}
