import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService,  } from 'src/app/services/auth.service';
import { DefaultService } from '../services/default.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  implements OnInit{
  leaveForm!: FormGroup;
  id!: any;
  data!: any;


  constructor(private fb: UntypedFormBuilder,
    private defaultService: DefaultService,
   private notification : NzNotificationService,
    private router: Router ) {}

  ngOnInit(): void {
    this.leaveForm = this.fb.group({
    fromDate: [null, [Validators.required, ]],
    toDate: [null, [Validators.required, ]],
    leaveType: [null, [Validators.required,]],
    reason: [null, [Validators.required, ]],


   })
   
   this.getAllAppliedLeaves();
  }

  submitForm(){
    if (this.leaveForm.valid) {
      this.defaultService.applyForLeave(this.id).subscribe((res)=>{
        console.log( this.leaveForm.value);
        this.notification.success("leave application Succescfully" ,"")  
      })   
    } else {
      Object.values(this.leaveForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.leaveForm.reset();
    for (const key in this.leaveForm.controls) {
      if (this.leaveForm.controls.hasOwnProperty(key)) {
        this.leaveForm.controls[key].markAsPristine();
        this.leaveForm.controls[key].updateValueAndValidity();
      }
    }
  }

  getAllAppliedLeaves(){
    this.defaultService.getAllLeavesTypes().subscribe((res)=>{
      this.data = res.content
    })
  }

}
