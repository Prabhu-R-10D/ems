import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'pagination',
  standalone: true,
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
  imports: [CommonModule, FormsModule]
})

export class PaginationComponent implements OnInit {
  employees: Employee[] = [];
  currentPage: number = 1; // Initialize to 1 for user-friendly input
  pageSize: number = 5;
  totalPages: number = 0;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    // Subtract 1 from currentPage to match backend page indexing
    const adjustedPage = this.currentPage - 1;

    this.employeeService.getPagination(adjustedPage, this.pageSize).subscribe({
      next: (data: any) => {
        this.employees = data.content;
        this.totalPages = data.totalPages;
      },
      error: (err) => {
        console.error('Error fetching employees:', err);
      }
    });
  }

  onPageChange(page: number): void {
    console.log('Page change:', page);
    this.currentPage = page;
    this.loadEmployees();
  }

  onPageSizeChange(size: number): void {
    this.pageSize = size;
    //this.currentPage = 1; 
    this.loadEmployees();
  }
}
