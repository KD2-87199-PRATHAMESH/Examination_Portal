package com.exam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.entity.Question;

public interface QuestionDao extends JpaRepository<Question, Long> {

}
