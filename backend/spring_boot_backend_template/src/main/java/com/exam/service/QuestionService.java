package com.exam.service;

import java.util.List;

import com.exam.dto.ApiResponse;
import com.exam.dto.ReqQuestion;
import com.exam.entity.Question;
import com.exam.entity.Quiz;

public interface QuestionService {
	public Question addQuestion(ReqQuestion reqQue );
	public ApiResponse updateQuestion(Question  question);
	public List<Question> getQuestionsofQuiz(Quiz quiz);
	public Question getQuestion(Long queId);
	public int deleteQuestion(Long queId);
	public List<Question> getAllQuestions(Long queId);

	

}
