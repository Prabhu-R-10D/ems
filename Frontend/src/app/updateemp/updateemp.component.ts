import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service'; 
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'updateemp',
  standalone: true,  
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './updateemp.component.html',
  styleUrls: ['./updateemp.component.css'],
})
export class UpdateEmpComponent {
  empid: number = 0;  
  employee: any = null;
  message: string = '';  

  constructor(private employeeService: EmployeeService) {}

  fetchEmployee(): void {
    if (this.empid <= 0) {
      this.message = 'Employee ID must be greater than 0!';
      return;
    }

    this.employeeService.getEmployeeById(this.empid).subscribe(
      (data) => {
        this.employee = data;
        this.message = '';
      },
      (error) => {
        this.message = 'Employee not found. Please try again.';
      }
    );
  }

  onUpdate(): void {
    if (!this.employee.name.trim() || !this.employee.dept.trim()||!this.employee.email.trim()||!this.employee.dob.trim()) {
      this.message = 'All fields are required!';
      return;
    }

    this.employeeService.updateEmployee(this.employee).subscribe(
      (response) => {
        this.message = 'Employee updated successfully';
        this.employee = null;
        this.empid = 0;
      },
      (error) => {
        this.message = 'Failed to update employee. Please try again.';
      }
    );
  }
}
