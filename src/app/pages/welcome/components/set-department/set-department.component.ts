import { Component, EventEmitter, Injector, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DepartmentFields } from '../../forms/department.field';
import { DefaultService } from '../../services/default.service';

@Component({
  selector: 'app-set-department',
  templateUrl: './set-department.component.html',
  styleUrls: ['./set-department.component.css']
})
export class SetDepartmentComponent {

  visible = false;
  form = new FormGroup({});
  fields !: FormlyFieldConfig[];
  @Input() department!: any;
  @Output() output = new EventEmitter();
  fileList: any = [];
  isLoading: boolean=false;
  options: any;


  constructor(private defaultService: DefaultService, 
    private notification: NzNotificationService, 
    private injector: Injector) {
  }

  ngOnInit(): void {
    this.fields = DepartmentFields();
  }

  ngOnChanges() {
    this.department = { ...this.department };
    this.fields = DepartmentFields();
  }

  toggle(visible: boolean): void {
    this.visible = visible;
  }

 
submit() {
  if (this.form.valid) {
    this.isLoading=true;
    var svc;
    this.department.id ? svc = this.defaultService.updateDepartment(this.department.id, this.department) : 
    svc = this.defaultService.postDepartments( this.department);
    svc.subscribe(res => {
      this.notification.success('Saved', 'Department Saved Successfully!', { nzDuration: 10000 });
      this.output.emit(res);
      this.isLoading=false;
      this.toggle(false);
      this.fileList = []
    },error=>{
      if(error && error.error && error.error.message){
        this.notification.error('Error', error.error.message);
        this.isLoading=false;
      }
    }).add(() => {
      this.isLoading = false;
    });;
  }
}

}
