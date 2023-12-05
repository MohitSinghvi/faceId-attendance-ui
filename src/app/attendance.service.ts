import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  

  // baseUrl = "http://23.22.247.75:8000/";
  baseUrl = "http://faceid-load-balancer-2144069326.us-east-1.elb.amazonaws.com/";
  constructor(public httpClient: HttpClient) {

  }


  addStudent(body: any){
    return this.httpClient.post(this.baseUrl+'addStudent', body);
  }

  markAttendance(body: any){
    return this.httpClient.post(this.baseUrl+'mark-attendance', body);
  }

  startSession(courseId: any){
    return this.httpClient.post(this.baseUrl+'create-session', {courseId});
  }

  getSessionAttendees(sessionId: any){
    return this.httpClient.get(this.baseUrl+'attendances/session?sessionId='+sessionId);
  }

  getAttendanceData(courseId: any){
    return this.httpClient.get(this.baseUrl+'attendances?courseId='+courseId);
  }

  getStudents(courseId?: any){
    let appendString = "";
    if(courseId){
      appendString = '?courseId='+courseId;
    }
    return this.httpClient.get(this.baseUrl+'students'+appendString);
  }

  addCourse(body: any) {
    return this.httpClient.post(this.baseUrl+'add-course', body);
  }

  getProfessors(){
    return this.httpClient.get(this.baseUrl+'professors');
  }

  getCourses(professorId?: any){
    let appendString = "";
    if(professorId){
      appendString = "?professorId="+professorId;
    }
    return this.httpClient.get(this.baseUrl+'courses'+appendString);
  }

  addProfessor(body: any) {
    return this.httpClient.post(this.baseUrl+'add-professor', body);
  }

  enrollStudents(courseId: any, studentIds: any){
    return this.httpClient.post(this.baseUrl+'course/enroll-students?courseId='+courseId, {studentIds});
  }

  getCourseAttendance(courseId: any){
    return this.httpClient.get(this.baseUrl+'courseAttendance?courseId='+courseId);
  }

  getStudentAttendance(studentId: any){
    return this.httpClient.get(this.baseUrl+'studentAttendance?studentId='+studentId);
  }

  getAllSessions(courseId: any){
    return this.httpClient.get(this.baseUrl+'sessions?courseId='+courseId);
  }

  login(body: any) {
    return this.httpClient.post(this.baseUrl+'login', body);
  }

  logout(email: any) {
    return this.httpClient.post(this.baseUrl+'logout',{email});
  }


}
