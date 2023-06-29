import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DefaultService } from '../welcome/services/default.service';

@Component({
  selector: 'app-hod-page',
  templateUrl: './hod-page.component.html',
  styleUrls: ['./hod-page.component.css']
})
export class HodPageComponent implements OnInit{

  departments:any;
  visible = false;
  form = new FormGroup({});
  fields !: FormlyFieldConfig[];
  @Input() hod!: any;
  @Output() output = new EventEmitter();

  constructor(private service: DefaultService,private nzMessageService:NzMessageService){}

  ngOnInit(): void {
    this.load();
  }

  toggle(visible:boolean){
    this.visible= visible;
  }

  load(event?:number){
    this.service.getHODs().subscribe((res)=>{
      this.departments= res
    })
  }

  reload(event:any){
this.load(event);
this.hod={};
  }

  confirm(id: number): void {
    this.service.deleteDepartment(id).subscribe(() => {
      this.nzMessageService.info('department has been deleted');
      this.load();
    });
  }

}
