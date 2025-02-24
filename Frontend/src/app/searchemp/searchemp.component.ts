import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service'; 
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
import { Employee } from '../employee.service';

@Component({
  selector: 'searchemp',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],  
  templateUrl: './searchemp.component.html',
  styleUrls: ['./searchemp.component.css'],
})
export class SearchempComponent {
  searchCriteria: string = 'ID';  
  searchValue: string = '';  
  employees: Employee[] = [];  
  message: string = '';  

  constructor(private employeeService: EmployeeService) {}

  onSearch(): void {
    if (this.searchCriteria === 'ID') {
      this.employeeService.getEmployeeById(Number(this.searchValue)).subscribe(
        (data) => {
          this.employees = [data]; 
          this.message = '';
          console.log('Received Data:', data);
        },
        (error) => {
          this.employees = [];
          this.message = 'Employee not found. Please try again.';
        }
      );
    } else if (this.searchCriteria === 'Name') {
      this.employeeService.getEmployeeByName(this.searchValue).subscribe(
        (data: Employee[]) => {
          this.employees = data;
          this.message = data.length > 0 ? '' : 'Employee not found. Please try again.';
          console.log('Received Data:', data);
        },
        (error) => {
          this.employees = [];
          this.message = 'Employee not found. Please try again.';
        }
      );
    } else if (this.searchCriteria === 'Department') {
      this.employeeService.getEmployeeByDept(this.searchValue).subscribe(
        (data: Employee[]) => {
          this.employees = data;
          this.message = data.length > 0 ? '' : 'Employee not found. Please try again.';
          console.log('Received Data:', data);
        },
        (error) => {
          this.employees = [];
          this.message = 'Employee not found. Please try again.';
        }
      );
    }
  }
}
