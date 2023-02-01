import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {
  baseUrl = 'http://192.168.10.146:8081/employee'

  constructor(private http: HttpClient, private router: Router) { }


  getAllEmployees(): Observable<any>{
return this.http.get(`${this.baseUrl}/getAll?page=1&size=1&sort=string`)
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/getById/${id}`)
  }

  updateEmployee(data: Employee, id: number): Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/update/${id}`, data)
  }

  createEmployee(data: Employee): Observable<any>{
    return  this.http.post(`${this.baseUrl}/create`, data)
  }

  deleteEmployee(id: number):Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/${id}`)
  }
}
