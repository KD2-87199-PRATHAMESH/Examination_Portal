package com.exam.controller;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.dto.ApiResponse;
import com.exam.dto.ReqQuestion;
import com.exam.dto.RespQuestion;
import com.exam.entity.Question;
import com.exam.entity.Quiz;
import com.exam.service.QuestionService;
import com.exam.service.QuizService;

@RestController
@RequestMapping("/question")
@CrossOrigin("*")
public class QuestionController {

	@Autowired
	private QuestionService queService;

	@Autowired
	private QuizService quizService;

	@Autowired
	private ModelMapper modelMapper;

	@PostMapping("/")
	public ResponseEntity<?> addQuestion(@RequestBody ReqQuestion entity) {
		Question question = queService.addQuestion(entity);
		RespQuestion respQ = modelMapper.map(question, RespQuestion.class);
		if (question != null) {
			return ResponseEntity.status(HttpStatus.CREATED)
					.body(respQ);
		}
		return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Question not added", 1));
	}


	
	@PatchMapping("/")
	public ResponseEntity<?> updateQ(@RequestBody RespQuestion req) {
		ApiResponse res = queService.updateQuestion(req);	
		return ResponseEntity.status(HttpStatus.OK).body(res);
	}

	@GetMapping("/{queId}")
	public ResponseEntity<?> getQuestion(@PathVariable("queId") Long queId) {
//		return this.subjectService.getSubject(subjectId);
		Question que = queService.getQuestion(queId);

		if (que != null) {
			return ResponseEntity.status(HttpStatus.OK).body(que);
		}

		return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("quiz not found", 0));
	}

	@GetMapping("/quiz/{quizId}")
	public ResponseEntity<?> getQuestionsOfQuiz(@PathVariable Long quizId) {

		Quiz quiz = quizService.getQuiz(quizId);
		List<Question> questions = quiz.getQuestions();
		if (questions.size() > Integer.parseInt(quiz.getNoOfQuestions())) {
			questions.subList(0, Integer.parseInt(quiz.getNoOfQuestions()) + 1);
		}
		Collections.shuffle(questions);
		return ResponseEntity.ok(questions);
	}

	@GetMapping("/quizz/{quizId}")
	public ResponseEntity<?> getQuestionsOfQuiz1(@PathVariable Long quizId) {

		Quiz quiz = quizService.getQuiz(quizId);
		List<Question> questions = quiz.getQuestions();
		if (questions.size() > Integer.parseInt(quiz.getNoOfQuestions())) {
			questions.subList(0, Integer.parseInt(quiz.getNoOfQuestions()) + 1);
		}
		List<RespQuestion> ll = questions.stream().map(q -> modelMapper.map(q, RespQuestion.class))
				.collect(Collectors.toList());
		return ResponseEntity.ok(ll);
	}

	@DeleteMapping("/{queId}")
	public ResponseEntity<?> deleteQuestion(@PathVariable("queId") Long queId) {
		int count = queService.deleteQuestion(queId);

		if (count == 1)
			return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Question Deleted Successfully...!", 1));

		return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Error While Deleting Question...!", 0));

	}

}
