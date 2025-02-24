import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'deleteemp',
  standalone: true,
  templateUrl: './deleteemp.component.html',
  styleUrls: ['./deleteemp.component.css'],
  imports: [FormsModule, CommonModule]
})
export class DeleteempComponent {
  empid: number = 0;
  message: string = '';

  constructor(private employeeService: EmployeeService) {}

  onSubmit(): void {
    if (!this.empid || this.empid <= 0) {
      this.message = 'Employee ID must be greater than 0!';
      return;
    }

    this.employeeService.deleteEmployee(this.empid).subscribe(
      (response) => {
        this.message = 'Employee Deleted Successfully';
        this.empid = 0;
      },
      (error) => {
        this.message = 'Failed to delete';
      }
    );
  }
}
