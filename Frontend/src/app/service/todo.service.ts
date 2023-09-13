import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(public http:HttpClient) { }

  server_address:string='http://localhost:3000';

  addtodo(data:any){
    return this.http.post<any>(`${this.server_address}/addtodo`,data);
  }

  deltodo(id:any){
    return this.http.delete(`${this.server_address}/deletetodo/${id}`)
  }

  viewtodo(){
    return this.http.get(`${this.server_address}/viewtodo`);
  }
}
