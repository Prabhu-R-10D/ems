import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'addemp',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css'],
})
export class AddEmpComponent {
  employee = { name: '', dept: '', email:'', dob:'', password:''};
  message: string = '';

  constructor(private employeeService: EmployeeService) {}

  onSubmit(): void {
    if (!this.employee.name.trim() || !this.employee.dept.trim()||!this.employee.email.trim()||!this.employee.dob.trim()) {
      this.message = 'All fields are required!';
      return;
    }
    this.employee.password=this.employee.dob;
    this.employeeService.addEmployee(this.employee).subscribe(
      (response) => {
        this.message = 'Employee added successfully';
        this.employee = { name: '', dept: '',  email:'', dob:'', password:''};
      },
      (error) => {
        this.message = 'Failed to add employee. Please try again.';
      }
    );
  }
}
