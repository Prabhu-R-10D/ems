package com.ems.EmployeeSystem.service;

import com.ems.EmployeeSystem.model.Employee;
import com.ems.EmployeeSystem.repo.Employeerepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import org.springframework.data.domain.Page;


import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    @Autowired
    Employeerepo repo;

    public void addEmployee(Employee emp){
        repo.save(emp);
    }

    public List<Employee> listEmployee(){
        return repo.findAll();
    }

    public void updateEmployee(Employee emp){
        repo.save(emp);
    }

    public void deleteEmployee(int empId){
        repo.deleteById(empId);
    }

    public Page<Employee> getEmployee(int page, int size){
        Pageable pageable= PageRequest.of(page,size);
        return repo.findAll(pageable);
    }

    public List<Employee> getSortedEmployee(String sortBy, String order) {
        Sort sort = (order.equalsIgnoreCase("asc"))
                ? Sort.by(sortBy).ascending()
                : Sort.by(sortBy).descending();

        return repo.findAll(sort);
    }

    public Optional<Employee> searchById(int empId){
        return repo.findById(empId);
    }

    public List<Employee> searchByName(String name) {
        return repo.findByName(name);
    }

    public List<Employee> searchByDept(String dept) {
        return repo.findByDept(dept);
    }


}
