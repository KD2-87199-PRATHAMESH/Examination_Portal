package com.exam.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.entity.Quiz;
import com.exam.entity.Subject;

public interface QuizDao extends JpaRepository<Quiz, Long>{
	public List<Quiz> findByIsActiveTrue();

}
