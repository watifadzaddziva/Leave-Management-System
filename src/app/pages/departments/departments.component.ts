import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DefaultService } from '../welcome/services/default.service';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit{
  departments:any;
  visible = false;
  form = new FormGroup({});
  fields !: FormlyFieldConfig[];
  @Input() department!: any;
  @Output() output = new EventEmitter();

  constructor(private service: DefaultService,private nzMessageService:NzMessageService){}

  ngOnInit(): void {
    this.load();
  }

  toggle(visible:boolean){
    this.visible= visible;
  }

  load(event?:number){
    this.service.getDepartments().subscribe((res)=>{
      this.departments= res
    })
  }

  reload(event:any){
this.load(event);
this.department={};
  }

  confirm(id: number): void {
    this.service.deleteDepartment(id).subscribe(() => {
      this.nzMessageService.info('department has been deleted');
      this.load();
    });
  }

}
