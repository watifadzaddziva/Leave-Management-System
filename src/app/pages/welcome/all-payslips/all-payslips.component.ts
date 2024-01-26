import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DefaultService } from '../services/default.service';

@Component({
  selector: 'app-all-payslips',
  templateUrl: './all-payslips.component.html',
  styleUrls: ['./all-payslips.component.css']
})
export class AllPayslipsComponent {

  payslips!: any;
  page = 1;
  baseUrl!: string;
  visible!: boolean;
  payslip  ={}

  constructor(private defaultService: DefaultService, private router : Router,
    private injector: Injector, private nzMessageService: NzMessageService) {
  }

  ngOnInit(): void {
    this.load();
   }

  toggle(visible: boolean): void {
    this.visible = visible;
  }

  load( event?: number): void {
    this.defaultService.getAllEmployees().subscribe((res: { content: any; })=>{
      this.payslips= res.content
     })
  }

  reload(event : any){
    this.load(event)
    this.payslip = {}
  }

  confirm(id: number): void {
    this.defaultService.deleteEmployee(id).subscribe(() => {
      this.nzMessageService.info('employee has been deleted');
      this.load();
    });
  }

  search(username: string): void {
    this.defaultService.findByName(username).subscribe((result: any) => {
      this.payslips = result
    });}

 
}


export interface Audit {
  createdDate: string;
  modifiedDate: string;
  createdBy?: any;
  modifiedBy?: any;
}
