import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../employee.service'; 
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'listemp',
  templateUrl: './listemp.component.html',
  styleUrls: ['./listemp.component.css'],
  imports: [CommonModule]
})
export class ListempComponent implements OnInit {
  employees: Employee[] = [];
  sortBy: string = 'empid';
  order: string = 'asc';

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getSortedEmployees();
  }

  getSortedEmployees(): void {
    this.employeeService.getSortedEmployees(this.sortBy, this.order).subscribe({
      next: (data) => {
        this.employees = data;
      },
      error: (err) => {
        console.error('Error fetching sorted employees:', err);
      }
    });
  }

  onSortChange(event: Event, field: string): void {
    const target = event.target as HTMLSelectElement;
    const value = target.value;

    if (field === 'sortBy') {
      this.sortBy = value;
    } else if (field === 'order') {
      this.order = value;
    }

    this.getSortedEmployees();
  }
}
