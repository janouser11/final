import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  students: any = Array();
  gradeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.gradeForm = this.formBuilder.group({
      studentName: [ '', Validators.required],
      courseName: [ '', Validators.required],
      courseScore: ['', Validators.required]
    })
    this.students.push("Alex")
    this.students.push("Christian")
    this.students.push("Ralph")
    this.students.push("Mike")
    this.students.push("George")
 


  }

  calculateGrade(){
    console.log("inside calc")
    console.log(this.gradeForm.controls['studentName'].value)
    if (this.gradeForm.valid){
      console.log(this.gradeForm.controls['studentName'].value)
    }
  }
}
