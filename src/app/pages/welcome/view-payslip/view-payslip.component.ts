import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DefaultService } from '../services/default.service';
import { REPORTFields } from '../forms/payslip-report.field';

@Component({
  selector: 'app-view-payslip',
  templateUrl: './view-payslip.component.html',
  styleUrls: ['./view-payslip.component.css']
})
export class ViewPayslipComponent {

  url!: string;
  disabled = true;
  loading: boolean = false;
  visible!: boolean;
  form = new UntypedFormGroup({});
  fields !: FormlyFieldConfig[];
  dates:any;
  pdfSrc!: string;
  safeUrl: any;
  isLoaded:boolean =false;
  options:any;
  employees:any;

  constructor(private nzNotification: NzNotificationService,
    private dp: DatePipe,
    private domSanitizer: DomSanitizer,
    private fb: UntypedFormBuilder,
    private service:DefaultService){

  }

  ngOnInit(): void {  
 this.getEmployees();
 this.fields= REPORTFields(this.employees)
  }

  toggle(visible: boolean) {
    this.visible = visible;
  }


  submit() {
    this.loading= true;
    this.service.payslipReport(this.form.value.id)
      .subscribe(
         (res:any) => {
          const file = new Blob([res], { type: 'application/pdf' });
          const fileURL = URL.createObjectURL(file);
          this.safeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(fileURL);
          this.isLoaded = true;
          this.loading=false;

        },
        error=>{
          this.loading= false;
        }
      );
  }

  getEmployees(){
    this.service.getAllEmployees().subscribe((res)=>{
      this.employees = res.map((employee: any) => {
        return { label: `${employee.firstName} ${employee.lastName}`, value: employee.id };
      });
      this.fields= REPORTFields(this.employees);
  })}

}
