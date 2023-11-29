import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  studentId: any;
  courses: any;
  ngOnInit(): void {
    this.getStudentAttendances();
  }

  constructor(public attendanceService: AttendanceService){}

  getStudentAttendances(){
    this.studentId = '1234';
    this.attendanceService.getStudentAttendance(this.studentId).subscribe(
      (res: any)=>{
        this.courses = res?.body;
      },(err)=>{
      }
    )
  }

}
