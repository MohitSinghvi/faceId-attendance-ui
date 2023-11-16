import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarkAttendanceComponent } from './mark-attendance/mark-attendance.component';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';

const routes: Routes = [
  {
    path: 'addStudent',
    component: AddStudentComponent,
  },
  {
    path: 'mark',
    component: MarkAttendanceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
