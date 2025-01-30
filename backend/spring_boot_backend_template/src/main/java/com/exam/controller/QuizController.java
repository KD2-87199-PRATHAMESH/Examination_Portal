package com.exam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.dto.ApiResponse;
import com.exam.dto.ReqQuiz;
import com.exam.dto.ReqUpdateQuiz;
import com.exam.entity.Quiz;
import com.exam.service.QuizService;

@RestController
@RequestMapping("/quiz")
@CrossOrigin("*")
public class QuizController {
	
	@Autowired
	private QuizService quizService;
	
	@PostMapping("/")
	public ResponseEntity<?> postMethodName(@RequestBody ReqQuiz entity) {
		Quiz quiz = quizService.addQuiz(entity);
		if(quiz != null) {
			return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse("Quiz Inserted: "+ quiz.getId(), 1));
		}
		return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Quiz not Inserted...!", 0));
	}
	
	@PutMapping("/")
	public ResponseEntity<?> UpdateQuiz(@RequestBody ReqUpdateQuiz reqUpdateQuiz) {
		ApiResponse res = quizService.updateQuiz(reqUpdateQuiz);
		return ResponseEntity.status(HttpStatus.OK).body(res);
	}
	
	@GetMapping("/{quizId}")
	public ResponseEntity<?> getQuiz(@PathVariable("quizId") Long quizId) {
//		return this.subjectService.getSubject(subjectId);
		Quiz quiz=quizService.getQuiz(quizId);
		
		if(quiz!=null)
		{
		return ResponseEntity.status(HttpStatus.OK).body(quiz);
		}
		
		return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("quiz not found",0));
	}

	@GetMapping("/")
	public ResponseEntity<?> getAllQuiz() {
	
		return ResponseEntity.ok(this.quizService.getAllQuiz());
	}

	@DeleteMapping("/{quizId}")
	public ResponseEntity<?> deleteQuiz(@PathVariable("quizId") Long quizId)
	{
		int count=quizService.deleteQuiz(quizId);
		
		if(count==1)
		return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Quiz Deleted Successfully...!", 1));
	
		return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Error While Deleting Quiz...!", 0));
		
	}


}
