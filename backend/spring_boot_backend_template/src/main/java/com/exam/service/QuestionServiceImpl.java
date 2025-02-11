package com.exam.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.dao.QuestionDao;
import com.exam.dao.QuizDao;
import com.exam.dto.ApiResponse;
import com.exam.dto.ReqQuestion;
import com.exam.dto.RespQuestion;
import com.exam.entity.Question;
import com.exam.entity.Quiz;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class QuestionServiceImpl implements QuestionService {
	
	
	@Autowired
	private QuestionDao questionDao;
	
	@Autowired
	private QuizDao quizDao;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public Question addQuestion(ReqQuestion reqQue) {
		// TODO Auto-generated method stub
		Quiz quiz=quizDao.findById(reqQue.getQuizId()).get();
		
		Question question=modelMapper.map(reqQue,Question.class);
		
		if(quiz!=null)
		{
			question.setQuiz(quiz);
			quiz.getQuestions().add(question);
		}
		Question isQuestion= questionDao.save(question);
		
		return isQuestion;
		
		
		
		
		
	}

	@Override
	public ApiResponse updateQuestion(RespQuestion req) {
		if(questionDao.existsById(req.getId())) {
			Question que = questionDao.findById(req.getId()).get();
			que.setAnswer(req.getAnswer());
			que.setContent(req.getContent());
			que.setOption1(req.getOption1());
			que.setOption2(req.getOption2());
			que.setOption3(req.getOption3());
			que.setOption4(req.getOption4());
			return new ApiResponse("Question updated", 1);			
		}
		return new ApiResponse("Question not updated", 0);
	}

	@Override
	public List<Question> getQuestionsofQuiz(Quiz quiz) {
		// TODO Auto-generated method stub
		return questionDao.findByQuiz(quiz);
	}

	@Override
	public Question getQuestion(Long queId) {
Question question=questionDao.findById(queId).get();
		
		if( question !=null)
		{
			return question;
		}
		
		return null;
	}

	@Override
	public int deleteQuestion(Long queId) {
		// TODO Auto-generated method stub
		
		Question question=this.questionDao.findById(queId).get();
		
		
		if(question!=null)
		{
		questionDao.delete(question);
		return 1;
		}
		return 0;
	}

	@Override
	public List<Question> getAllQuestions(Long queId) {
		// TODO Auto-generated method stub
		return this.questionDao.findAll();
	}
	

	

}
