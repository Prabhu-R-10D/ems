package com.ems.EmployeeSystem.controller;

import com.ems.EmployeeSystem.model.Employee;
import com.ems.EmployeeSystem.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class EmployeeController {

    @Autowired
    EmployeeService service;


    @PostMapping("/add")
    public void addEmployee(@RequestBody Employee emp){
        service.addEmployee(emp);
    }

    @GetMapping("/")
    public List<Employee> listEmployee(){
        return service.listEmployee();
    }

    @PutMapping("/update")
    public void updateEmployee(@RequestBody Employee emp){
        service.updateEmployee(emp);
    }

    @DeleteMapping("/delete/{empId}")
    public void deleteEmployee(@PathVariable int empId){
        service.deleteEmployee(empId);
    }


    @GetMapping("/page")
    public Page<Employee> getEmployees(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size) {
        return service.getEmployee(page, size);
    }

    @GetMapping("/sort")
    public ResponseEntity<List<Employee>> getSortedProducts(
            @RequestParam String sortBy,
            @RequestParam(defaultValue = "asc") String order) {

        List<Employee> sortedProducts = service.getSortedEmployee(sortBy, order);
        return new ResponseEntity<>(sortedProducts, HttpStatus.OK);
    }


    @GetMapping("/searchByName/{name}")
    public List<Employee> searchByName(@PathVariable String name) {
        return service.searchByName(name);
    }

    @GetMapping("/searchByDept/{dept}")
    public List<Employee> searchByDept(@PathVariable String dept) {
        return service.searchByDept(dept);
    }

    @GetMapping("/{empid}")
    public Optional<Employee> searchById(@PathVariable int empid){
        return service.searchById(empid);
    }



}
