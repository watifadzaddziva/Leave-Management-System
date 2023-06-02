import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { EmployeesReportFields } from '../report forms/all-employees';


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

  

  ngOnInit(): void {
    this.fields= EmployeesReportFields(this.options);
  }


  toggle(visible: boolean) {
    this.visible = visible;
  }


  loadReport(){
    
  }
}
