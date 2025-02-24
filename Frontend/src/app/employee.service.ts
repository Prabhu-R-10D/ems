import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Employee {
  empid?: number;
  name: string;
  dept: string;
  email:string;
  password:string;
  dob:string;
  
}

@Injectable({
  providedIn: 'root',
})

export class EmployeeService {
  private url='http://localhost:8080';
  constructor(private http: HttpClient) {}


  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }

  getPagination(page: number, size: number): Observable<any> {
    const url = `${this.url}/page?page=${page}&size=${size}`;
    return this.http.get<any>(url);
  }
    
  getSortedEmployees(sortBy: string, order: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.url}/sort?sortBy=${sortBy}&order=${order}`);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.url}/add`, employee);
  }

  deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/delete/${employeeId}`);
  }
  
  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.url}/update`, employee);
  }

  getEmployeeById(empid: number): Observable<Employee> {
    const url = `${this.url}/${empid}`;
    return this.http.get<Employee>(url);
  }

  getEmployeeByName(name: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.url}/searchByName/${name}`);
  }

  getEmployeeByDept(dept: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.url}/searchByDept/${dept}`);
  }

}
