package com.exam.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.entity.Question;
import com.exam.entity.Quiz;

public interface QuestionDao extends JpaRepository<Question, Long> {
	List<Question> findByQuiz(Quiz quiz);

}
