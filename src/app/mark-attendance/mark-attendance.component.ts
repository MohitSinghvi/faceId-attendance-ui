import { Component } from '@angular/core';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-mark-attendance',
  templateUrl: './mark-attendance.component.html',
  styleUrls: ['./mark-attendance.component.scss']
})
export class MarkAttendanceComponent {


  constructor(private attendanceService: AttendanceService){

  }

  clearImage() {
    // this.webcamImage = null;
    // this.imageTaken = false;
    
  }
  saveImage(image: any){
    image = image?._imageAsDataUrl?.split(",")[1]
    console.log(image);
    const body = {
      "sessionId" : "Session1",
      "imageBytes": image

    }
    this.attendanceService.markAttendance(body).subscribe(
      (result: any)=>{
        alert("Attendance Marked for roll no: "+ result?.rollNo);
      },
      (error)=>{
        alert("Face Mismatch");
      }
    )
    // this.openCameraPopup = false;
    // this.profileForm.get('image')?.setValue(this.webcamImage);
  }
  
}
