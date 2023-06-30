import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { EmployeesReportFields } from '../report forms/all-employees';
import { DatePipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DefaultTitleStrategy } from '@angular/router';
import { DefaultService } from '../../services/default.service';


@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {

  url!: string;
  disabled = true;
  loading: boolean = false;
  visible!: boolean;
  form = new FormGroup({});
  fields!: FormlyFieldConfig[];
  dates:any;
  pdfSrc!: string;
  safeUrl: any;
  isLoaded:boolean =false;
  options:any

  constructor(private nzNotification: NzNotificationService,
    private dp: DatePipe,
    private domSanitizer: DomSanitizer,
    private service:DefaultService){

  }

  ngOnInit(): void {  
  }

  toggle(visible: boolean) {
    this.visible = visible;
  }


  submit() {
    this.loading= true;
    this.service.employeesReport()
      .subscribe(
         (res:any) => {
          const file = new Blob([res], { type: 'application/pdf' });
          const fileURL = URL.createObjectURL(file);
          // window.open(fileURL, '_blank');
          this.safeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(fileURL);
          this.isLoaded = true;
          this.loading=false;

        },
        error=>{
          this.loading= false;
        }
      );
  }
}
