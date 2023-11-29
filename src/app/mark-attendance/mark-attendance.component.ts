import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../attendance.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mark-attendance',
  templateUrl: './mark-attendance.component.html',
  styleUrls: ['./mark-attendance.component.scss']
})
export class MarkAttendanceComponent implements OnInit{

  sessionId: any;
  attendees: any;
  enrolled: any;
  courseId: any;
  attendeesSubscription: any;

  constructor(private attendanceService: AttendanceService, public router: ActivatedRoute){


  }

  ngOnInit(){
    this.router.params.subscribe(params => {

      this.router.queryParams.subscribe( innerParams => {
          this.sessionId = params['sessionId'];
          this.courseId = innerParams['courseId']
          this.showAttendeesList();
          // this.showEnrolledList();
        }
      )
      

    });
  }

  clearImage() {
    // this.webcamImage = null;
    // this.imageTaken = false;
    
  }
  saveImage(image: any){
    image = image?._imageAsDataUrl?.split(",")[1]
    console.log(image);
    const body = {
      "sessionId" : this.sessionId,
      "imageBytes": image,
      "courseId": this.courseId
    }
    this.attendanceService.markAttendance(body).subscribe(
      (result: any)=>{
        alert("Attendance Marked for roll no: "+ result?.rollNo);
        this.showAttendeesList();

      },
      (error)=>{
        alert("Face Mismatch");
      }
    )
  }

  showAttendeesList(){
    if(this.attendeesSubscription){
      this.attendeesSubscription.unsubscribe();
    }

    this.attendeesSubscription = this.attendanceService.getSessionAttendees(this.sessionId).subscribe(
      (res: any)=>{
        this.enrolled = res;
        this.attendees = res.filter(function(element: any){
          return element?.present;
        });
      },
      (err)=>{
        // this.attendees = [{
        //   "rollNo": "1211",
        //   "name":"Bob",
        //   "present": true
        //   },
        //   {
        //     "rollNo": "3112",
        //     "name":"Obama",
        //     "present": true
        //   }
        // ]
          
      }
    );

  }

  showEnrolledList(){
    this.attendanceService.getStudents(this.courseId).subscribe(
      (res: any)=>{
        this.enrolled = res?.body;
      },
      (err)=>{
        this.enrolled = [{
          "rollNo": "1211",
          "name":"Bob",
          "present": true
          },
          {
            "rollNo": "3112",
            "name":"Obama",
            "present": true
          }
        ]
          
      }
    );
  }
  
}
