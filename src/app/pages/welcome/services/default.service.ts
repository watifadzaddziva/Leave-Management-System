import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { Employee } from '../models/employee';
import { EmployeeLeave } from '../models/employee-leave';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {
  baseUrl = 'http://192.168.10.146:8085/'


  constructor(private http: HttpClient, private router: Router) { }


getAllEmployees(): Observable<any>{
  return this.http.get(`${this.baseUrl}employee/getAllEmployees?offset=0&size=100`)
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}employee/getById/${id}`)
  }
  updateEmployee(id: number, data: Employee ): Observable<any>{
    return this.http.put<any>(`${this.baseUrl}employee/update/${id}`, data)
  }

  createEmployee(data: Employee): Observable<any>{
    return  this.http.post(`${this.baseUrl}employee/create`, data)
  }

  deleteEmployee(id: number):Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}employee/delete/${id}`)

  }
  
 getTotalEmployees(): Observable<any>{
  return this.http.get(`${this.baseUrl}employee/totalEmployees`)
 }

 public findByName(username:string): Observable<any> {
  return this.http.get(`${this.baseUrl}employee/findEmployeeByName/{username}`);
}

   // employee leave
  getMyLeaves(id:any){
    return this.http.get(`${this.baseUrl}leave/myleaves/${id}`)
  }
 
  applyForLeave(data : any){
    return this.http.post(`${this.baseUrl}leave/applyLeave`, data)
  }
  updateLeave(data: any){
return this.http.put(`${this.baseUrl}leave/`,data)
  }

  cancelLeave(leaveId:number, employeeId:number){
    return this.http.delete(`${this.baseUrl}leave/cancelLeave/${leaveId}/${employeeId}`)
  }

  approveLeave(id: number, data :EmployeeLeave ):  Observable<any>{
    return this.http.put<any>(`${this.baseUrl}leave/approve/${id}`, data)
  }

  rejectLeave(id: number, data :EmployeeLeave ):  Observable<any>{
    return this.http.put<any>(`${this.baseUrl}leave/reject/${id}`, data)
  }

  getAllAppliedLeaves(): Observable<any>{
    return this.http.get(`${this.baseUrl}leave/getPendingLeaves`)    
  }

 getAllLeaves(): Observable<any>{
  return this.http.get(`${this.baseUrl}leave/getAllLeaves`)
 }
 
 getRemainingLeaveDays(id:number):Observable<any>{
  return this.http.get(`${this.baseUrl}leave/getAllRemainingLeaveDays/${id}`)
 }
 

//  get Count

 getTotalLeaves(){
  return this.http.get(`${this.baseUrl}leave/numberOfLeaves`)
 }
 getTotalPending(): Observable<any>{
return this.http.get(`${this.baseUrl}leave/numberOfPendingLeaves`)
}

 getTotalApproved(): Observable<any>{
  return this.http.get(`${this.baseUrl}leave/numberOfApproved`)
  
 }
 getTotalRejected(): Observable<any>{
  return this.http.get(`${this.baseUrl}leave/numberOfRejectedLeaves`)
 }

public findByStatus(status:any): Observable<any> {
  return this.http.get(`${this.baseUrl}leave/findLeaveByStatus/{status}`);
}

getAllEvents(): Observable <any>{
return this.http.get(`${this.baseUrl}leave/calendar`)
}

getAdmins():Observable<any>{
return this.http.get(`${this.baseUrl}/register`)
}

}
