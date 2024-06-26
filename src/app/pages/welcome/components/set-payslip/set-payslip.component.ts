import { Component, EventEmitter, Injector, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CreatePayslipFields } from '../../forms/payslip.field';
import { DefaultService } from '../../services/default.service';
import { validateVerticalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-set-payslip',
  templateUrl: './set-payslip.component.html',
  styleUrls: ['./set-payslip.component.css']
})
export class SetPayslipComponent {
  visible = false;
  form = new FormGroup({});
  fields !: FormlyFieldConfig[];
  @Input() payslip!: any;
  @Output() output = new EventEmitter();
  fileList: any = [];
  options: any;
  employees:any;
  isLoading:boolean=false;


  constructor(private defaultService: DefaultService, 
    private notification: NzNotificationService, private fb:UntypedFormBuilder,
    private injector: Injector) {
  }

  ngOnInit(): void {
    this.payslip= { ...this.payslip};
    this.getEmployees();
    this.fields = CreatePayslipFields(this.employees);
    this.form= this.fb.group({
    overtime:['',[Validators.required]],
    basic_salary:['',[Validators.required]],
    allowances:['',Validators.required],
    leaveDays:['',Validators.required],
    otherDeductions:['',Validators.required],
    housing_plan:['',[Validators.required]],
    attendance_bonus:['',Validators.required],
    transport_allowance:['',Validators.required],
    night_allowance:['',Validators.required],
    overtime_holiday:['',Validators.required],
    nssa:['',Validators.required]


    })
  }

  ngOnChanges() {
    this.payslip = { ...this.payslip };
    this.fields = CreatePayslipFields(this.employees);
  }

  toggle(visible: boolean): void {
    this.visible = visible;
  }

 
submit() {
  if (this.form.valid) {
    this.isLoading=true;
    const dataToSend= this.form.value;
    var svc;
    this.payslip.id ? svc = this.defaultService.updatePayslip(this.payslip.id, dataToSend) : 
    svc = this.defaultService.createPayslip(dataToSend);
    svc.subscribe(res => {
      this.notification.success('Saved', 'Payslip Saved Successfully!', { nzDuration: 10000 });
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

getEmployees(){
  this.defaultService.getAllEmployees().subscribe((res)=>{
    this.employees= res.map((employee:any)=>{
      return {label:`${employee.firstName} ${employee.lastName}`,value:employee.id}
    });
    this.fields=CreatePayslipFields(this.employees);
  })
}


}
