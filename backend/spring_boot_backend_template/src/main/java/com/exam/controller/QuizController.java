package com.exam.controller;

import java.util.List;

<<<<<<< HEAD
<<<<<<< HEAD
import org.modelmapper.ModelMapper;
=======
>>>>>>> vishal
=======
import org.modelmapper.ModelMapper;
>>>>>>> 6fe6fa52519273e9c64832371b759bc49cdf675f
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
import com.exam.dto.ReqQuiz;
import com.exam.dto.ReqUpdateQuiz;
import com.exam.dto.RespQuizDto;
import com.exam.entity.Quiz;
import com.exam.service.QuizService;

@RestController
@RequestMapping("/quiz")
@CrossOrigin("*")
public class QuizController {

<<<<<<< HEAD
	@Autowired
	private QuizService quizService;
<<<<<<< HEAD
	
	@Autowired
	private ModelMapper modelMapper;
=======
>>>>>>> vishal
=======
    @Autowired
    private QuizService quizService;
    
    @Autowired
    private ModelMapper modelMapper;
>>>>>>> 6fe6fa52519273e9c64832371b759bc49cdf675f

    @PostMapping("/")
    public ResponseEntity<?> postMethodName(@RequestBody ReqQuiz entity) {
        Quiz quiz = quizService.addQuiz(entity);
        if (quiz != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse("Quiz Inserted: " + quiz.getId(), 1));
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Quiz not Inserted...!", 0));
    }

    @PatchMapping("/")
    public ResponseEntity<?> UpdateQuiz(@RequestBody ReqUpdateQuiz reqUpdateQuiz) {
        ApiResponse res = quizService.updateQuiz(reqUpdateQuiz);
        return ResponseEntity.status(HttpStatus.OK).body(res);
    }

<<<<<<< HEAD
	@GetMapping("/{quizId}")
	public ResponseEntity<?> getQuiz(@PathVariable("quizId") Long quizId) {
//		return this.subjectService.getSubject(subjectId);
		Quiz quiz = quizService.getQuiz(quizId);
<<<<<<< HEAD
		
		RespQuizDto res = modelMapper.map(quiz, RespQuizDto.class);
		
		if (quiz != null) {
			return ResponseEntity.status(HttpStatus.OK).body(res);
=======

		if (quiz != null) {
			return ResponseEntity.status(HttpStatus.OK).body(quiz);
>>>>>>> vishal
		}
=======
    @GetMapping("/{quizId}")
    public ResponseEntity<?> getQuiz(@PathVariable("quizId") Long quizId) {
        Quiz quiz = quizService.getQuiz(quizId);
        
        if (quiz != null) {
            RespQuizDto res = modelMapper.map(quiz, RespQuizDto.class);
            return ResponseEntity.status(HttpStatus.OK).body(res);
        }

        return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Quiz not found", 0));
    }
>>>>>>> 6fe6fa52519273e9c64832371b759bc49cdf675f

    @GetMapping("/")
    public ResponseEntity<?> getAllQuiz() {
        return ResponseEntity.ok(this.quizService.getAllQuiz());
    }

    @DeleteMapping("/{quizId}")
    public ResponseEntity<?> deleteQuiz(@PathVariable("quizId") Long quizId) {
        int count = quizService.deleteQuiz(quizId);

        if (count == 1)
            return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Quiz Deleted Successfully...!", 1));

        return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Error While Deleting Quiz...!", 0));
    }

    @GetMapping("/subject/{subjectId}")
    public ResponseEntity<?> getMethodName1(@PathVariable Long subjectId) {
        List<RespQuizDto> list = quizService.getBySubjectId(subjectId);
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }

}
