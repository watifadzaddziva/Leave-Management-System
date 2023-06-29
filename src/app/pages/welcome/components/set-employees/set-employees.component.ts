import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { EmployeesFields } from '../../forms/employees.field';
import { DefaultService } from '../../services/default.service';

@Component({
  selector: 'app-set-employees',
  templateUrl: './set-employees.component.html',
  styleUrls: ['./set-employees.component.css']
})
export class SetEmployeesComponent implements OnInit {

  visible = false;
  form = new FormGroup({});
  fields !: FormlyFieldConfig[];
  @Input() employee!: any;
  @Output() output = new EventEmitter();
  fileList: any = [];
  options: any;
  departments:any;


  constructor(private defaultService: DefaultService, 
    private notification: NzNotificationService, 
    private injector: Injector) {
  }

  ngOnInit(): void {
    this.getDepartments();
    this.fields = EmployeesFields(this.departments);
  }

  ngOnChanges() {
    this.employee = { ...this.employee };
    this.fields = EmployeesFields(this.departments);
  }

  toggle(visible: boolean): void {
    this.visible = visible;
  }

 
submit() {
  if (this.form.valid) {
    var svc;
    this.employee.id ? svc = this.defaultService.updateEmployee(this.employee.id, this.employee) : 
    svc = this.defaultService.createEmployee( this.employee);
    svc.subscribe(res => {
      this.notification.success('Saved', 'Employee Saved Successfully!', { nzDuration: 10000 });
      this.output.emit(res);
      this.toggle(false);
      this.fileList = []
    },error=>{
      if(error && error.error && error.error.message){
        this.notification.error('Error', error.error.message);
      }

  
    });
  }
}

getDepartments(){
  this.defaultService.getDepartments().subscribe((res)=>{
    this.departments= res.map((department:any)=>{
      return {label:department.name,value:department.id}
    });
    this.fields=EmployeesFields(this.departments);
  })
}



}
