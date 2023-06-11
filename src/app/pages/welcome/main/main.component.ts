import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService,  } from 'src/app/services/auth.service';
import { EmployeeLeave } from '../models/employee-leave';
import { DefaultService } from '../services/default.service';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ApplyLeaveFieldsFields } from '../forms/apply-leave';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  implements OnInit{
  visible = false;
  form = new FormGroup({});
  fields !: FormlyFieldConfig[];
  @Input() leave!: any;
  @Output() output = new EventEmitter();
  @Output() leaveToApproveCountChange = new EventEmitter<number>();
  leavesToApproveCount: number = 0;
  fileList: any = [];
  options: any;
 id:any

  constructor(private fb: UntypedFormBuilder,
    private defaultService: DefaultService,
    private authService:AuthService,
   private notification : NzNotificationService,
   private jwtHelper: JwtHelperService,
    private router: Router ) {}

ngOnInit(): void {
this.leave={...this.leave };
this.fields= ApplyLeaveFieldsFields();
}

toggle(visible: boolean): void {
  this.visible = visible;
}
submit() {
  if (this.form.valid) {
    const dataToSend = this.form.value as { employeeId: number };
    const tokenData = JSON.parse(sessionStorage.getItem('user_data') ?? '{}');
    dataToSend.employeeId = tokenData.user.employee.id;
    this.id = tokenData.user.employee.id;
    var svc;
    this.leave.id ? svc = this.defaultService.updateLeave(this.leave.id, this.id, this.form.value) :
      svc = this.defaultService.applyForLeave(dataToSend);
    svc.subscribe(res => {
      this.notification.success('Saved', 'Leave application successful!', { nzDuration: 10000 });
      this.output.emit(res);
      this.leavesToApproveCount++;
      this.leaveToApproveCountChange.emit(this.leavesToApproveCount);
      this.toggle(false);
      this.fileList = [];
    }, error => {
      // if (error && error.error && error.error.message) {
        this.notification.error('Error ,Invalid Dates','' );
      // }
    });
  }
}



}
