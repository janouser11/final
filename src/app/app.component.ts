import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { gradeForm } from './gradeForm';
import { CustomFormsModule } from 'ng2-validation'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  students: any = Array();
  gradeForm: FormGroup;

  public studentList: any
  public courseName: string
  public courseScore: string
  public courseGrade: string
  public studentStatement: string
  public splicedStudentStatement: string

  constructor(private formBuilder: FormBuilder) {
    
  }


  ngOnInit(): void {

 
    this.students.push("Alex")
    this.students.push("Christian")
    this.students.push("Ralph")
    this.students.push("Mike")
    this.students.push("George")
 


  }

  onSubmit(){
    console.log("Coursename: " + this.courseName)
    console.log("Studentlist: " + this.studentList)
    console.log("score: " + this.courseScore)
    this.calculateGrade(this.courseScore);
    console.log("grade: " + this.courseGrade)
    this.studentStatement = "Student " + this.studentList + " takes the course " + this.courseName + " has the grade " + this.courseGrade
    this.splicedStudentStatement = this.courseName.slice(1, -1);
  }

  calculateGrade(gradeNumber: any){
    console.log("gradenUmber passed: " + gradeNumber);
    switch(true) { 
      case (gradeNumber <= 60): { 
         this.courseGrade = "F";
         break; 
      } 
      case (gradeNumber <= 70): { 
         this.courseGrade = "D";
         break; 
      } 
      case (gradeNumber <= 80): { 
        this.courseGrade = "B";
        break; 
     } 
     case (gradeNumber <= 100): { 
      this.courseGrade = "A";
      break; 
   } 
      default: { 
         //statements; 
         break; 
      } 
   } 
  }
}
