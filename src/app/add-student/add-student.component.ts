import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { FormGroup, FormControl } from '@angular/forms';
import { AttendanceService } from '../attendance.service';
import { Router } from '@angular/router';

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
    batch: new FormControl(''),
    email: new FormControl(''),
    image: new FormControl()
  });

  public webcamImage: WebcamImage|null = null;
  showCameraModal: boolean = true;
  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
    this.imageTaken = true;
  }

  constructor(private attendanceService: AttendanceService, public router: Router){
  
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
        this.router.navigate(['/students']);
      },
      (error)=>{
        console.log(error);
        alert("Student Not Added!");
      }
    )

  }

  private imageSrc: string = '';

  handleInputChange(e: any) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e: any) {
    let reader = e.target;
    this.imageSrc = reader.result;
    this.saveImage({_imageAsDataUrl: this.imageSrc});
  }

}
