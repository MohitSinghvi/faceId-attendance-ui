import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../attendance.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.scss']
})
export class ViewAttendanceComponent implements OnInit{

  attendanceData: any;
  courseId: any;
  courseName: any;
  items = ['First', 'Second', 'Third'];
  sessions: any;
  sessionAttendances: any;

  constructor(public attendanceService: AttendanceService, public route: ActivatedRoute, public router: Router){

  } 
  ngOnInit(): void {
    this.sessionAttendances = {};
    this.route.params.subscribe(params=>{
      this.courseId = params['courseId'];
      this.route.queryParams.subscribe(innerParams=>{
        this.courseName = innerParams['name'];
        this.attendanceService.getCourseAttendance(params['courseId']).subscribe(
          (res: any)=>{
            this.attendanceData = res?.body;
            
          }
        )

        this.attendanceService.getAllSessions(this.courseId).subscribe(
          (res: any)=>{
            this.sessions = res;
          },(err)=>{

          }
        )
      })
    })
  }

  getSessionInfo(sessionId: string){
    if(!this.sessionAttendances[sessionId]){
      this.attendanceService.getSessionAttendees(sessionId).subscribe(
        (res : any)=>{
          this.sessionAttendances[sessionId] = res;
        },
        (err)=>{
  
        }
      )
    }
  }

  openSession(sessionId: any){
    this.router.navigate(['/mark/'+sessionId],{queryParams: {courseId: this.courseId}});
  }
}
