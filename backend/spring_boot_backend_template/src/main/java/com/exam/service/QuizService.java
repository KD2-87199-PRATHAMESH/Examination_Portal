package com.exam.service;

import java.util.List;

import com.exam.dto.ApiResponse;
import com.exam.dto.ReqQuiz;
import com.exam.dto.ReqUpdateQuiz;
import com.exam.entity.Quiz;

public interface QuizService {
	public Quiz addQuiz(ReqQuiz reqQuiz );
//	public Quiz updateQuiz(ReqQuiz reqQuiz);
	public ApiResponse updateQuiz(ReqUpdateQuiz reqUpdateQuiz);
	public List<Quiz> getAllQuiz();
	public Quiz getQuiz(Long quizId);
	public int deleteQuiz(Long quizId);


}
