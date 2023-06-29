import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService,  } from 'src/app/services/auth.service';
import { NzUploadFile } from 'ng-zorro-antd/upload';
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
  previewImage: string | undefined = '';
  previewVisible = false;
  uploading = false;
  isUploadFieldVisible:boolean= false;
  options: any;
  id:any;
  baseUrl:any;

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

onChanges(){
  this.leave={...this.leave };
  this.fields= ApplyLeaveFieldsFields();

  this.form.get('leaveType.value')?.valueChanges.subscribe((value)=>{
  this.isUploadFieldVisible= value === 'Study' || value === 'Sick';
  })
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

handlePreview = async (file: NzUploadFile) => {
  if (!file.url && !file['preview']) {
    file['preview'] = await this.getBase64(file.originFileObj!);
  }
  this.previewImage = file.url || file['preview'];
  this.previewVisible = true;
};

handleRemove = (file: NzUploadFile) => {
  // if (!file.response) return false;
  // this.service.delete(`/file/${file.response.id}`).subscribe(res => {
  //   this.leave.imageUrl = null;
  //   this.leave.success = null;
  //   return true;
  // });
  return true;
};

getBase64(file: File): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

uploadedFile(e: any) {
  if (e.type == 'success' && e.file.status == 'done')
    if (e.file.response)
      this.leave = {
        ...this.leave,
        productImageId: e.file.response.id,
        success: true,
        file: e.file.response.location
      };
    else this.leave = { ...this.leave, success: false };
}



}
