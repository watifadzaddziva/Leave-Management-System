import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { HODFields } from '../../forms/hod.fields';
import { DefaultService } from '../../services/default.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-set-hod',
  templateUrl: './set-hod.component.html',
  styleUrls: ['./set-hod.component.css']
})
export class SetHodComponent  implements OnInit{
  visible = false;
  form = new FormGroup({});
  fields !: FormlyFieldConfig[];
  @Input() hod!: any;
  @Output() output = new EventEmitter();
  fileList: any = [];
  options: any;
  employees:any;
  isLoading:boolean= false;
  departments:any;


  constructor(private defaultService: DefaultService, 
    private notification: NzNotificationService, 
    private injector: Injector) {
  }

  ngOnInit(): void {
    this.getAll();
    this.fields = HODFields(this.departments, this.employees);
  }

  ngOnChanges() {
    this.hod = { ...this.hod };
    this.fields = HODFields(this.departments, this.employees);
  }

  toggle(visible: boolean): void {
    this.visible = visible;
  }

 
  submit() {
    if (this.form.valid) {
      this.isLoading = true;
      const dataToSend = {
        ...this.form.value,
        departmentId: this.form.get('departmentId')?.value,
        employeeId: this.form.get('employeeId')?.value
      };
      let svc;
      if (this.hod.id) {
        svc = this.defaultService.updateDepartment(this.hod.id, this.hod);
      } else {
        svc = this.defaultService.createHOD(dataToSend.departmentId, dataToSend.employeeId, '');
      }
      svc.subscribe(
        res => {
          this.notification.success('Saved', 'Department Saved Successfully!', { nzDuration: 10000 });
          this.output.emit(res);
          this.toggle(false);
          this.fileList = [];
        },
        error => {
          if (error && error.error && error.error.message) {
            this.notification.error('Error', error.error.message);
          } else {
            this.notification.error('Error', 'An error occurred while saving the department.');
          }
        }
      ).add(() => {
        this.isLoading = false; 
      });
    }
  }
  


getAll() {
  forkJoin([
    this.defaultService.getAllEmployees(),
    this.defaultService.getDepartments()
  ]).subscribe(([employeesRes, departmentsRes]) => {
    
    this.employees = employeesRes.map((employee: any) => {
      return { label: `${employee.firstName} ${employee.lastName}`, value: employee.id };
    });

    this.departments = departmentsRes.map((department: any) => {
      return { label: department.name, value: department.id };
    });

    this.fields = HODFields(this.departments, this.employees);
  });
}

}
