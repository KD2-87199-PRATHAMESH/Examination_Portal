package com.exam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.entity.Quiz;

public interface QuizDao extends JpaRepository<Quiz, Long>{

}
