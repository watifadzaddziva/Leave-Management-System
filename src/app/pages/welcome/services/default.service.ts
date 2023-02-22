import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { EmployeeLeave } from '../models/employee-leave';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {
  baseUrl = 'http://54.156.63.145:8080/employee'

  constructor(private http: HttpClient, private router: Router) { }


  getAllEmployees(): Observable<any>{
return this.http.get(`${this.baseUrl}/getAllEmployees?offset=0&size=100`)
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/getById/${id}`)
  }
  updateEmployee(id: number, data: Employee ): Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/update/${id}`, data)
  }

  createEmployee(data: Employee): Observable<any>{
    return  this.http.post(`${this.baseUrl}/create`, data)
  }

  deleteEmployee(id: number):Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/delete/${id}`)

  }
  // employee leave

  applyForLeave(data : EmployeeLeave){
    return this.http.post(`${this.baseUrl}/applyLeave`, data)
  }


  approveLeave(id: number, data :EmployeeLeave ):  Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/approve/${id}`, data)
  }

  rejectLeave(id: number, data :EmployeeLeave ):  Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/reject/${id}`, data)
  }

  getAllAppliedLeaves(): Observable<any>{
    return this.http.get(`${this.baseUrl}/getPendingLeaves`)   
    
  }


 getAllLeaves(){
  return this.http.get(`${this.baseUrl}/getAllLeaves`)
 }
}
