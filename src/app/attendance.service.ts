import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  

  baseUrl = "http://localhost:8000/";
  // baseUrl = "http://localhost:8000/";
  constructor(public httpClient: HttpClient) {

  }


  addStudent(body: any){
    return this.httpClient.post(this.baseUrl+'addStudent', body);
  }

  markAttendance(body: any){
    return this.httpClient.post(this.baseUrl+'mark-attendance', body);
  }


}
