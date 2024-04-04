import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
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
  isLoaded:boolean= false;
  isLoading:boolean=false;


  constructor(private defaultService: DefaultService, 
    private notification: NzNotificationService, private fb:UntypedFormBuilder,
    private injector: Injector) {
  }

  ngOnInit(): void {
    this.form=this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      gender:['',[Validators.required]],
      dateOfBirth:['',[Validators.required]],
      date_of_join:['',[Validators.required]],
      grade:['',[Validators.required]],
      status:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]],
      username:['',[Validators.required]],
      departmentId:['',[Validators.required]],
    });
    this.getDepartments();
  }

  ngOnChanges() {
    this.employee = { ...this.employee };
  }

  toggle(visible: boolean): void {
    this.visible = visible;
  }

 
submit() {
  if (this.form.valid) {
    this.isLoading=true;
    var svc;
    this.employee.id ? svc = this.defaultService.updateEmployee(this.employee.id, this.employee) : 
    svc = this.defaultService.createEmployee( this.employee);
    svc.subscribe(res => {
      this.notification.success('Saved', 'Employee Saved Successfully!', { nzDuration: 10000 });
      this.isLoading=false;
      this.output.emit(res); 
      this.toggle(false);
      this.fileList = []
    },error=>{
      this.isLoading=false;
      if(error && error.error && error.error.message){
        this.notification.error('Error', error.error.message);
        
      }
    }).add(() => {
      this.isLoading = false; 
    });
  }
}

getDepartments(){
  this.defaultService.getDepartments().subscribe((res)=>{
    this.departments= res.map((department:any)=>{
      return {label:department.name,value:department.id}
    });
  })
}



}
