package com.exam.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.entity.Faculty;

public interface FacultyDao extends JpaRepository<Faculty, Long> {

	Optional<Faculty> findByEmailAndPassword(String email, String password);
	
}
