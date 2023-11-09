import {Component} from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.scss']
})
export class AppComponent {
// latest snapshot
public webcamImage: WebcamImage|null = null;
handleImage(webcamImage: WebcamImage) {
this.webcamImage = webcamImage;
}
}