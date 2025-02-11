package com.exam.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.entity.Student;

public interface StudentDao extends JpaRepository<Student, Long> {
	
	Optional<Student> findByEmailAndPassword(String email, String password);
<<<<<<< HEAD
<<<<<<< HEAD
	Optional<Student> findByEmail(String email);
=======
>>>>>>> vishal
=======
	
	Optional<Student> findByEmail(String email);
>>>>>>> 6fe6fa52519273e9c64832371b759bc49cdf675f

}
