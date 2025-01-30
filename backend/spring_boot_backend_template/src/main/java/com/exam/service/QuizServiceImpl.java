package com.exam.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.dao.QuizDao;
import com.exam.dao.SubjectDao;
import com.exam.dto.ApiResponse;
import com.exam.dto.ReqQuiz;
import com.exam.dto.ReqUpdateQuiz;
import com.exam.entity.Quiz;
import com.exam.entity.Subject;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class QuizServiceImpl implements QuizService {

	@Autowired	
	private	QuizDao quizDao;
	
	@Autowired
	private SubjectDao subjectDao;
	
	@Autowired
	private ModelMapper modelMapper; 
	
	@Override
	public Quiz addQuiz(ReqQuiz reqQuiz) {
		Quiz quiz=modelMapper.map(reqQuiz,Quiz.class);
		
		
		Subject subject=subjectDao.findById(reqQuiz.getSubId()).get();
		quiz.setSubject(subject);
		quiz.setActive(true);
		subject.getQuizzes().add(quiz);
		Quiz isQuiz= quizDao.save(quiz);
		
		return isQuiz;
	}

//	@Override
//	public Quiz updateQuiz(LReqQuiz reqQuiz) {
//		
////		Quiz q = quizDao.findById(reqQuiz.getId()).get();
////		Quiz isQuiz= quizDao.save(q);
////		return isQuiz;
//		
////Quiz quiz=modelMapper.map(reqQuiz,Quiz.class);
////		
////		Quiz isQuiz= quizDao.save(quiz);
////		isQuiz.setActive(true);
////		return isQuiz;
//	}

	@Override
	public List<Quiz> getAllQuiz() {
		// TODO Auto-generated method stub
		return this.quizDao.findByIsActiveTrue();
	}

	@Override
	public Quiz getQuiz(Long quizId) {
Quiz quiz=quizDao.findById(quizId).get();
		
		if(quiz.isActive() && quiz !=null)
		{
			return quiz;
		}
		
		return null;
	}

	@Override
	public int deleteQuiz(Long quizId) {
		// TODO Auto-generated method stub
		Quiz quiz=quizDao.findById(quizId).get();
		
		if(quiz!=null && quiz.isActive())
		{
		quiz.setActive(false);
		return 1;	
		}
		
		return 0;
	}

	@Override
	public ApiResponse updateQuiz(ReqUpdateQuiz reqUpdateQuiz) {
		// TODO Auto-generated method stub
		
		if(quizDao.existsById(reqUpdateQuiz.getId()))
		{
			Quiz qEntity=modelMapper.map(reqUpdateQuiz, Quiz.class);
			Quiz uQuiz=quizDao.save(qEntity);
			return new ApiResponse("Quiz updated", 1);
		}
		return new ApiResponse("Quiz not updated", 0);
	}



}
