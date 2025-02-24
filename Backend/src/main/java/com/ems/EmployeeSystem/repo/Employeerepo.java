package com.ems.EmployeeSystem.repo;

import com.ems.EmployeeSystem.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface Employeerepo extends JpaRepository<Employee,Integer> {

    List<Employee> findByName(String name);

    List<Employee> findByDept(String dept);
}
