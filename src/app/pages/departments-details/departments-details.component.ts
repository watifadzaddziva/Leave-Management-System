import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DefaultService } from '../welcome/services/default.service';

@Component({
  selector: 'app-departments-details',
  templateUrl: './departments-details.component.html',
  styleUrls: ['./departments-details.component.css']
})
export class DepartmentsDetailsComponent {


  departments!: any;
  members:[]=[];
  id!:any;
  data: any;

  constructor(
    private route: ActivatedRoute,
    private notify: NzNotificationService,
    private service: DefaultService,
  ) {
  
  }

  ngOnInit(){
    this.id= this.route.snapshot.params['id'];
      this.service.getDepartmentnyId(this.id).subscribe((res)=>{
        this.departments=res;
        this.data=res.employees;
      })
  }

}
