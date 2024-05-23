import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService,  } from 'src/app/services/auth.service';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { DefaultService } from '../services/default.service';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ApplyLeaveFieldsFields } from '../forms/apply-leave';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  visible = false;
  form = new FormGroup({});
  fields!: FormlyFieldConfig[];
  showUpload = false;
  @Input() leave!: any;
  @Output() output = new EventEmitter();
  @Output() leaveToApproveCountChange = new EventEmitter<number>();
  leavesToApproveCount: number = 0;
  fileList: any = [];
  previewImage: string | undefined = '';
  previewVisible = false;
  uploading = false;
  options: any;
  leave_types!:any;
  id: any;
  baseUrl=`http://localhost:8085`;
  isLoading:boolean=false;
  imageUrl!:any;

  constructor(
    private fb: UntypedFormBuilder,
    private defaultService: DefaultService,
    private authService: AuthService,
    private notification: NzNotificationService,
    private jwtHelper: JwtHelperService,
    private router: Router,
    private msg: NzMessageService
  ) {}

  ngOnInit(): void {
    this.leave = { ...this.leave };
    this.fields = ApplyLeaveFieldsFields();
    this.form = this.fb.group({
      leaveType: ['', [Validators.required]],
      reason: ['', [Validators.required]],
      file:[]
    });
  }

  handleLeaveTypeChange(value: string) {
    this.showUpload = value === 'Study' ;
  }

  toggle(visible: boolean): void {
    this.visible = visible;
  }

  submit() {
    if (this.form.valid) {
      this.isLoading=true;
      const dataToSend = this.form.value as { employeeId: number ,file:any};
      const tokenData = JSON.parse(sessionStorage.getItem('user_data') ?? '{}');
      dataToSend.employeeId = tokenData.user.employee.id;
      dataToSend.file= this.imageUrl;
      this.id = tokenData.user.employee.id;
      var svc;
      this.leave.id
        ? (svc = this.defaultService.updateLeave(
            this.leave.id,
            this.id,
            this.form.value
          ))
        : (svc = this.defaultService.applyForLeave(dataToSend));
      svc.subscribe(
        (res) => {
          this.notification.success('Saved', 'Leave application successful!', {
            nzDuration: 10000,
          });
          this.output.emit(res);
          this.isLoading=false;
          this.toggle(false);
          this.fileList = [];
        },
        (error) => {
          if(error && error.error && error.error.message){
            this.notification.error('Error', error.error.message);      
          }
        }
      ).add(() => {
        this.isLoading = false; 
      });;
    }
  }

  handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
      this.imageUrl= file.response?.location;
      console.log(this.imageUrl)
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    } 
  }


  getLeaves(){
    this.defaultService.getLeaveTypes().subscribe((res)=>{
      this.leave_types=res;
    })
  }
}
