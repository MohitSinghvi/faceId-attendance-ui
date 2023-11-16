import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { FormGroup, FormControl } from '@angular/forms';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent {
  displayStyle = "block"; 
  openCameraPopup = false;
  imageTaken = false;
  // latest snapshot

  name="";
  profileForm = new FormGroup({
    name: new FormControl(''),
    rollNo: new FormControl(''),
    course: new FormControl(''),
    image: new FormControl()
  });

  public webcamImage: WebcamImage|null = null;
  showCameraModal: boolean = true;
  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
    this.imageTaken = true;
  }

  constructor(private attendanceService: AttendanceService){
  
  }

  
  
  openPopup() { 
    // this.displayStyle = "block"; 
    this.openCameraPopup = true;
  } 
  closePopup() { 
    // this.displayStyle = "none"; 
    this.openCameraPopup = false;
    
  } 

  clearImage() {
    // this.webcamImage = null;
    // this.imageTaken = false;

  }
  saveImage(image: any){
    this.profileForm.get('image')?.setValue(image._imageAsDataUrl.split(",")[1]);
    console.log(image);
  }

  retry() {
    this.imageTaken = false;
  }
  
  onSubmit() {
    console.log(this.profileForm?.value);
    this.attendanceService.addStudent(this.profileForm?.value).subscribe(
      (result)=>{
        console.log(result);
        alert("Student Added Successfully!");
      },
      (error)=>{
        console.log(error);
        alert("Student Not Added!");
      }
    )

  }

}
