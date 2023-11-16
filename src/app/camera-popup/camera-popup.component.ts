import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-camera-popup',
  templateUrl: './camera-popup.component.html',
  styleUrls: ['./camera-popup.component.scss']
})
export class CameraPopupComponent {
  @ViewChild('exampleModal') modal: ElementRef;
  displayStyle = "block"; 
  openCameraPopup = false;
  imageTaken = false;

  @Input()
  heading = "Capture";


  @Output()
  imageSave = new EventEmitter<any>();
  

  @Output()
  imageClear = new EventEmitter<any>();

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
    this.imageSave.emit(this.webcamImage);
  }

  retry() {
    this.imageTaken = false;
    this.imageClear.emit();
  }

}
