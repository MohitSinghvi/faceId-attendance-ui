import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{

  showPopup = false;
  professors = [];

  courseForm = new FormGroup({
    name: new FormControl(''),
    code: new FormControl(''),
    description: new FormControl(''),
    professor: new FormControl(''),
    term: new FormControl('')
  });

  constructor(public router: Router, public attendanceService: AttendanceService){
    
  }
  ngOnInit(): void {
    this.getCourses();
  }


  list = [{
    "name": "Cloud Technologies",
    "code": "CMPE-272",
    "description": "Course exploring various services in AWS",
    "professor": "Sanjay Garje",
    "term": "Fall 2023"
  },
  {
    "name": "Cloud Technologies",
    "code": "CMPE-272",
    "description": "Course exploring various services in AWS",
    "professor": "Sanjay Garje",
    "term": "Fall 2023"
  },
  {
    "name": "Cloud Technologies",
    "code": "CMPE-272",
    "description": "Course exploring various services in AWS",
    "professor": "Sanjay Garje",
    "term": "Fall 2023"
  }  ]


  onSubmit(){

    

  }

  closePopup(){

    this.showPopup = false;
  }

  openPopup() {
    this.showPopup = true;
  }

  startSession(code: any) {

    this.attendanceService.startSession(code).subscribe(
      (res: any)=>{
        this.router.navigate(['/mark/'+res.sessionId],{queryParams: {courseId:code}});
      },(err)=>{

      }
    )
  }

  viewCourseAttendance(code: any, name: any) {
    
    this.router.navigate(['view-attendance/'+code], {queryParams: {name:name}});
  }

  getCourses(){
    if(localStorage.getItem('role')=='Professor'){
      this.attendanceService.getCourses(localStorage.getItem('userId')).subscribe(
        (res: any)=>{
          this.list = res;
        },(err)=>{
          // alert("error");
        }
      )
    } else {
      this.attendanceService.getCourses().subscribe(
        (res: any)=>{
          this.list = res;
        },(err)=>{
          // alert("error");
        }
      )
    }

  }
  

}
