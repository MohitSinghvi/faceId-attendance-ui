import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AttendanceService } from '../attendance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.scss']
})
export class ProfessorsComponent implements OnInit {

  getProfessorSubscription: any;

  constructor(public attendanceService: AttendanceService, public router: Router){

  }
  ngOnInit(): void {
    this.getProfessors();
  }

  showPopup = false;
  professors = [];

  professorForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    email: new FormControl('')
  });

  list =[
    {
      "name": "Bob",
      "email": "bob@sjsu.edu",
      "description": "CS",
    },
    {
      "name": "Bob",
      "email": "bob@sjsu.edu",
      "description": "CS",
    },
    {
      "name": "Bob",
      "email": "bob@sjsu.edu",
      "description": "CS",
    },
    {
      "name": "Bob",
      "email": "bob@sjsu.edu",
      "description": "CS",
    }
  ]


  onSubmit(){
    this.addProfessor();

  }

  closePopup(){
    this.showPopup = false;
  }

  openAddProffesorPopup() {
    this.showPopup = true;
  }

  addProfessor() {
    this.attendanceService.addProfessor(this.professorForm.value).subscribe(
      (res)=>{
        alert("Professor Added Successfully");
        // this.router.navigate(['/professors']);
        this.closePopup();
        this.getProfessors();
      },
      (err)=>{
        alert("Error");
      }
    )
  }

  getProfessors(){
    if(this.getProfessorSubscription){
      this.getProfessorSubscription.unsubscribe();
    }
    this.getProfessorSubscription = this.attendanceService.getProfessors().subscribe(
      (res: any)=>{
        this.list =res;
      },
      (err)=>{
        alert("Error");
      }
    )
  }

}
