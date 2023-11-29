import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AttendanceService } from '../attendance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  students: any;
  
  // [{rollNo:1,name: "Mohit"},
  //   {rollNo:2,name: "Kushal"}
  // ]
  studentSet = new Set();
  courseForm = new FormGroup({
    name: new FormControl(''),
    code: new FormControl(''),
    description: new FormControl(''),
    professorId: new FormControl(''),
    term: new FormControl(''),
    students : new FormControl()
  });

  constructor(public attendanceService: AttendanceService, public router: Router){

  }

  ngOnInit(): void {
    this.getStudentsList();
    this.getProfessors();
  }

  professors=[]

  onSubmit(){

    const body = this.courseForm.value;
    // body.students = [...this.studentSet];
    this.attendanceService.addCourse(body).subscribe(
      (res: any)=>{
        this.attendanceService.enrollStudents(res.code, [...this.studentSet]).subscribe(
          (response)=>{
            alert("Course Added Successfully");
            this.router.navigate(['/courses']);
          },(error)=>{

          }
        )
        // this.router.navigate(['/courses']);
      },(err) =>{
        alert("Error");
      }
    )

    console.log(this.studentSet);
  }

  clear(){
  }

  addRemoveStudent(event: any, rollNo: any){
    if(event.target.checked){
      this.studentSet.add(rollNo);
    } else{
      this.studentSet.delete(rollNo);
    }
  }

  getStudentsList(){
    this.attendanceService.getStudents().subscribe(
      (res: any)=>{
        this.students = res?.body;
      },
      (err)=>{
          
      }
    );
  }

  getProfessors(){
    this.attendanceService.getProfessors().subscribe(
      (res: any)=>{
        this.professors = res;
      },(err)=>{

      }
    )
  }

}
