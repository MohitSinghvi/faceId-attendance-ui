import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit{


  list: any;
//   =[{
//     "name": "Bob",
//     "rollNo": "0123456" ,
//     "email": "bob@sjsu.edu",
//     "major": "CS",
//     "term":"Fall 2023",
//     "image": ""
//   },
//   {
//     "name": "Bob",
//     "rollNo": "0123456" ,
//     "email": "bob@sjsu.edu",
//     "major": "CS",
//     "term":"Fall 2023",
//     "image": ""
//   },
//   {
//     "name": "Bob",
//     "rollNo": "0123456" ,
//     "email": "bob@sjsu.edu",
//     "major": "CS",
//     "term":"Fall 2023",
//     "image": ""
//   },
//   {
//     "name": "Bob",
//     "rollNo": "0123456" ,
//     "email": "bob@sjsu.edu",
//     "major": "CS",
//     "term":"Fall 2023",
//     "image": ""
//   }
// ]


  constructor(public attendanceService: AttendanceService){

  }


  ngOnInit(): void {
    this.attendanceService.getStudents().subscribe(
      (res: any)=>{
        this.list = res?.body;
      },(err)=>{

      }
    )
  }






}
