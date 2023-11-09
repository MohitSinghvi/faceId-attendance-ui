import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent {
  @ViewChild('exampleModal') modal: ElementRef;
  displayStyle = "block"; 
  openCameraPopup = false;
  imageTaken = false;
  // latest snapshot

  name="";
  profileForm = new FormGroup({
    name: new FormControl(''),
    rollno: new FormControl(''),
    course: new FormControl(''),
    image: new FormControl()
  });

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  public webcamImage: WebcamImage|null = null;
  showCameraModal: boolean = true;
  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
    this.imageTaken = true;
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
    this.webcamImage = null;
    this.imageTaken = false;
  }
  saveImage(){
    this.openCameraPopup = false;
    this.profileForm.get('image')?.setValue(this.webcamImage);
  }

  retry() {
    this.imageTaken = false;
  }
  
  onSubmit() {
    console.log(this.profileForm?.value);
  }

}
