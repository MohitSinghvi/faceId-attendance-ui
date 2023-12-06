# FaceIdAttendance

NOTE: This is the user interface implementation of the application. For Backend refer: <a href = "https://github.com/MohitSinghvi/faceId-attendance-backend">https://github.com/MohitSinghvi/faceId-attendance-backend<a>


**Project Name**: Facial Recognition based attendance management system. <a href = "http://mohitsinghvi.com/">mohitsinghvi.com</a>

**UNIVERSITY:** http://www.sjsu.edu/

**COURSE:** CMPE 281- Cloud Technologies

**Professor:** Sanjay Garje

**Project Members:**

Mohit Mahendra Singhvi: https://www.linkedin.com/in/imohitsinghvi/<br>
Kushal Vema Sai: https://www.linkedin.com/in/kushal-sai-3096vks/<br>
Mohaimin Iqbal Gazi<br>
Manikanta Nynala

**Problem Statement:**
Traditional methods such as paper sign-in sheets and badge scanners, are time-consuming, inefficient, and prone to errors. 
The Students or Employees must always carry their ID card for NFC based authentication systems, which is an overhead. 
Can be misused if lost and cause a security concern.

**Proposed Solution:**
An attendance system where students can mark their attendance by just pointing their face in front of the camera.
The Attendance data of all the sessions of the courses will be available to the professors on a dashboard. 
This uses facial recognition technology backed by Amazon Rekognition API.
The Project Architecture is built entirely on AWS and deployed on AWS cloud.

**Features**

Admin:
Add Student page - Student Info - name, roll no, major, term, photo.
Add Professor page - Add Professor info.
Add Course page. Add info like name, term, etc. Select the Professor, select a list of students who are a part of this class using a checkbox.

Professor:
Courses List page with actions like start session, view attendance data.
Attendance page (opened when session is started) - Session info, Camera button, and a list of students whose attendance is marked.
Attendance dashboard course, session, and student wise.

Students: 
Attendance dashboard for all the courses enrolled.

**Application Flow:**<br>

<img width="613" alt="image" src="https://github.com/MohitSinghvi/faceId-attendance-ui/assets/35193178/c0a1cdef-25db-4c1c-82b3-cf9f4dcdfc18">
<br>

**Authentication Flow:**

<br>
<img width="365" alt="image" src="https://github.com/MohitSinghvi/faceId-attendance-ui/assets/35193178/7ad1ff85-87d0-4833-b943-7909e63063ff">
<br>

**Attendance Flow:**

<br>
<img width="489" alt="image" src="https://github.com/MohitSinghvi/faceId-attendance-ui/assets/35193178/e5a028cc-73f5-4f62-bad7-3824f7e95fed">
<br>

**Project Architecture** <br>

![image](https://github.com/MohitSinghvi/faceId-attendance-ui/assets/35193178/62c197ce-86f7-4bdf-8787-7eb075e36b12)


**Demo Screenshots:**<br>

Student Registration Page:<br>
<img width="439" alt="image" src="https://github.com/MohitSinghvi/faceId-attendance-ui/assets/35193178/45a990a4-9968-4074-b2da-ebf201c26525">
<br>

Add Professor page:<br>
<img width="267" alt="image" src="https://github.com/MohitSinghvi/faceId-attendance-ui/assets/35193178/3f0db4b5-c1e9-40f0-a195-8fb8a3973c4d">
<br>

Add Course Page:<br>
<img width="258" alt="image" src="https://github.com/MohitSinghvi/faceId-attendance-ui/assets/35193178/1e822e63-f272-4de8-80fd-e568121c6897">
<br>

Marking Attendance:<br>
<img width="612" alt="image" src="https://github.com/MohitSinghvi/faceId-attendance-ui/assets/35193178/8e7e0a2f-12a1-468d-9fc8-9e32593002d1">
<br>

Attendance for the ongoing course shown as:<br>
<img width="697" alt="image" src="https://github.com/MohitSinghvi/faceId-attendance-ui/assets/35193178/8bb522e1-9eca-4109-9817-f83fb6b4c597">
<br>

Session-wise attendance data shown as:<br>
<img width="423" alt="image" src="https://github.com/MohitSinghvi/faceId-attendance-ui/assets/35193178/bdedbb6f-2238-45cf-8cf2-e0d13b7a0c77"><br>

Attendance analytics shown as: <br>
<img width="474" alt="image" src="https://github.com/MohitSinghvi/faceId-attendance-ui/assets/35193178/4d3d314f-aebd-41b0-9a5c-5847fc1596e5"><br>

**Pre Requisite Configurations:**

Configure and setup the following Services of Amazon AWS by creating an account at https://aws.amazon.com/ and then setting up:

1. ELB
2. Autoscaling groups
3. Cognito
4. RDS
5. Amazon Rekognition
6. Route 53
7. IAM
8. S3
9. Cloudwatch
10. SES
11. Code-pipeline
12. EC2

List of required software to download locally:
1. Node.js
2. NPM
3. Angular CLI
4. My SQL workbench
5. Postman
6. Visual Studio Code
7. Browser

**Quick Steps:**

Frontend:
1. Install Nodejs, Node package manager and Angular CLI.
2. Clone the the Angular Project.
3. In the root folder, install the dependencies using the command: npm i
4. Run the project using: ng serve
5. The Angular server will start on localhost port 4200.

Backend:
1. Install Node
2. Clone the backend repository: <a href = "https://github.com/MohitSinghvi/faceId-attendance-backend">https://github.com/MohitSinghvi/faceId-attendance-backend<a>
3. Install dependencies: npm i
4. To start the server, in the root directory, open terminal and run: node index.js
5. The server will start at port 3000

Hosted at: http://mohitsinghvi.com/

Demo Recording:  https://drive.google.com/file/d/1m_XLIED0klvWmQNiVhSXKy174bQBtaUx/view?usp=sharing




This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
