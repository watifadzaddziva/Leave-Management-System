import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService,  } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  implements OnInit{
  leaveForm!: FormGroup

  data = [
    {type: 'warning',
      name: 'Sick Leave',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      type: 'success',
      name: 'Vaccation',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      type: 'error',
      name: 'Unpaid',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  constructor(private fb: UntypedFormBuilder,
    private authService: AuthService,
   private notification : NzNotificationService,
    private router: Router ) {}

  ngOnInit(): void {
    this.leaveForm = this.fb.group({
    fromDate: [null, [Validators.required, ]],
    toDate: [null, [Validators.required, ]],
    leaveType: [null, [Validators.required,]],
    reason: [null, [Validators.required, ]],

   })
  }

  submitForm(){
    // if (this.leaveForm.valid) {
    //   this.authService.registerUserFromServer(this.user).subscribe((res)=>{
    //     console.log('submit', this.leaveForm.value);
    //     this.notification.success("Registered Succescfully" ,"")
    //  this.router.navigate(['/login']);
        
    //   })
      
    // } else {
    //   Object.values(this.leaveForm.controls).forEach(control => {
    //     if (control.invalid) {
    //       control.markAsDirty();
    //       control.updateValueAndValidity({ onlySelf: true });
    //     }
    //   });
    // }
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

}
