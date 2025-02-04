package com.exam.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.entity.Quiz;

public interface QuizDao extends JpaRepository<Quiz, Long>{
	
	List<Quiz> findByIsActiveTrue();
	
	List<Quiz> findBySubjectIdAndIsActiveTrue(Long subjectId);
	
}
