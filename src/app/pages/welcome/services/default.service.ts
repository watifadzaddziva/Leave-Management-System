import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Observer, map } from 'rxjs';
import { Employee } from '../models/employee';
import { EmployeeLeave } from '../models/employee-leave';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {
  baseUrl = 'http://localhost:8085/'


  constructor(private http: HttpClient, private router: Router) { }


getAllEmployees(): Observable<any>{
  return this.http.get(`${this.baseUrl}employee/activeEmployees`)
  }

  getEmployeeById(id: number): Observable<any>{
    return this.http.get<Employee>(`${this.baseUrl}employee/getById/${id}`)
  }
  updateEmployee(id: number, data: any ): Observable<any>{
    return this.http.put<any>(`${this.baseUrl}employee/update/${id}`, data)
  }

  createEmployee(data: any): Observable<any>{
    return  this.http.post(`${this.baseUrl}employee/create`, data)
  }

  deleteEmployee(id: number):Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}employee/delete/${id}`)

  }
  
 getTotalEmployees(): Observable<any>{
  return this.http.get(`${this.baseUrl}employee/totalEmployees`)
 }

 public findByName(username:string): Observable<any> {
  return this.http.get(`${this.baseUrl}employee/findEmployeeByName/${username}`);
}

   // employee leave
  getMyLeaves(id:any){
    return this.http.get(`${this.baseUrl}leave/myleaves/${id}`)
  }
  
  employeesReport(id: any): Observable<any> {
    let url = `${this.baseUrl}reports/employees/report/`;
    if (id) {
      url += `?id=${id}`;
    } else {
      url = url;
    }
  
    return this.http.get(url, { responseType: 'blob' as 'json' }).pipe(
      map((data) => {
        return data;
      })
    );
  }

  leavesReport(id: any): Observable<any> {
    let url = `${this.baseUrl}reports/leave/report/`;
    if (id) {
      url += `?leavetype=${id}`;
    } else {
      url = url;
    }
  
    return this.http.get(url, { responseType: 'blob' as 'json' }).pipe(
      map((data) => {
        return data;
      })
    );
  }

  payslipReport(id:number):Observable<any>{
    let url = `${this.baseUrl}reports/payslip/report/`;
    if (id) {
      url += `?id=${id}`;
    } else {
      url = url;
    }
    return this.http.get(url, { responseType: 'blob' as 'json' }).pipe(
      map((data) => {
        return data;
      })
    );
  }
 
  applyForLeave(data : any){
    return this.http.post(`${this.baseUrl}leave/applyLeave`, data)
  }
  updateLeave(leaveId: number,employeeId:number,data:any){
return this.http.put(`${this.baseUrl}leave/updateLeave/${leaveId}/${employeeId}`,data)
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
 
 getLeaveTypes():Observable<any>{
  return this.http.get(`${this.baseUrl}leave/get_leave_types`)
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
  return this.http.get(`${this.baseUrl}leave/findLeaveByStatus/${status}`);
}

getAllEvents(): Observable <any>{
return this.http.get(`${this.baseUrl}leave/calendar`)
}

getAdmins():Observable<any>{
return this.http.get(`${this.baseUrl}/register`)
}

// departments

postDepartments(data:any):Observable<any>{
return this.http.post(`${this.baseUrl}department/create`,data)
}

updateDepartment(id: number, data:any):Observable<any>{
  return this.http.put<any>(`${this.baseUrl}department/update/${id}`,data)
}

getDepartmentnyId(id:number):Observable<any>{
  return this.http.get(`${this.baseUrl}department/getDepartmentById/${id}`)
}

getDepartments():Observable<any>{
  return this.http.get(`${this.baseUrl}department/getAll`)
}

deleteDepartment(id : number):Observable<any>{
  return this.http.delete(`${this.baseUrl}department/delete/${id}`)
}
// HODs
createHOD(dptId: any,empId :any, data:any):Observable<any>{
  return this.http.post(`${this.baseUrl}headOfDepartment/create/${dptId}/${empId}`, data)

}
getHODs():Observable<any>{
  return this.http.get(`${this.baseUrl}headOfDepartment/getAll`)
}

deleteHOD(id:number):Observable<any>{
  return this.http.delete(`${this.baseUrl}headOfDepartment/delete/${id}`)
}

// payslips
getAllPayslips(): Observable<any>{
  return this.http.get(`${this.baseUrl}payslip/getAll`)
  }

  getPayslipById(id: number): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}payslip/getById/${id}`)
  }
  updatePayslip(id: number, data: any ): Observable<any>{
    return this.http.put<any>(`${this.baseUrl}payslip/update/${id}`, data)
  }

  createPayslip(data: any): Observable<any>{
    return  this.http.post(`${this.baseUrl}payslip/create`, data)
  }

  deletePayslip(id: number):Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}payslip/delete/${id}`)

  }
}
