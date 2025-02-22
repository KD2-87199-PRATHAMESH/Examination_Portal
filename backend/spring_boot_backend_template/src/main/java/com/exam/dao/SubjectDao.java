package com.exam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.entity.Subject;
import java.util.List;


public interface  SubjectDao extends JpaRepository<Subject, Long> {

	public List<Subject> findByIsActiveTrue();
	
	List<Subject> findByCourseId_Id(Long courseId);
	
	Subject findByFaculty_Id(Long facultyId);
}
