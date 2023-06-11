import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DefaultService } from '../../services/default.service';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { EmployeesReportFields } from '../report forms/all-employees';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-leaves-reports',
  templateUrl: './all-leaves-reports.component.html',
  styleUrls: ['./all-leaves-reports.component.css']
})
export class AllLeavesReportsComponent implements OnInit {

  url!: string;
  dates:any;
  disabled = true;
  loading: boolean = false;
  visible!: boolean;
  form = new FormGroup({});
  fields!: FormlyFieldConfig[];
  pdfSrc!: string;
  safeUrl: any;
  isLoaded:boolean =false;
  baseUrl = 'http://192.168.10.146:8085/'

  constructor(
    private service: DefaultService,
    private nzNotification: NzNotificationService,private http:HttpClient,
    private dp: DatePipe,
    private domSanitizer: DomSanitizer,
  ) {}
  
  ngOnInit(): void {
    this.fields= EmployeesReportFields();
  }

  toggle(visible: boolean) {
    this.visible = visible;
  }

 

  submit() {
    this.loading= true;
    this.service.leavesReport()
      .subscribe(
         (res:any) => {
          console.log(res)
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

}
