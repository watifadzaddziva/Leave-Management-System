import { Component } from '@angular/core';
import { DefaultService } from '../services/default.service';

@Component({
  selector: 'app-all-leaves',
  templateUrl: './all-leaves.component.html',
  styleUrls: ['./all-leaves.component.css']
})
export class AllLeavesComponent {
  data!: any;
  status!: any

constructor(private defaultService: DefaultService){}


  ngOnInit(): void {
this.getAllLeaves();
 }

 getAllLeaves(){
  this.defaultService.getAllLeaves().subscribe((res)=>{
    this.data = res
  })
 }

 
 search(status: string): void {
  this.defaultService.findByStatus(status).subscribe(result => {
    this.data = result;

  });

}
}
