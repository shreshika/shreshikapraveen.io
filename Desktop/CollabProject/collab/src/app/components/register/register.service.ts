import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url ="http://localhost:9000/Users/addUser"
  
  constructor(private http:HttpClient) { }

  saveUsers(data:any){
    return this.http.post(this.url, data);
  }
}


