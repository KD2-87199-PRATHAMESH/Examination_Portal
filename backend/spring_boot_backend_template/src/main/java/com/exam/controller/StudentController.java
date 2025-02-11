package com.exam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.dto.ApiResponse;
import com.exam.dto.ReqStudent;
import com.exam.dto.ReqStudentSignIn;
import com.exam.dto.ReqStudentUpdate;
import com.exam.entity.Course;
import com.exam.entity.Student;
import com.exam.service.StudentService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/student")
@CrossOrigin("*")
public class StudentController {

<<<<<<< HEAD
	@Autowired
	private StudentService studentService;
	
	@GetMapping("/course")
	public ResponseEntity<?> getMethodName() {
		List<Course> courses = studentService.findAllCourses();
		return ResponseEntity.status(HttpStatus.OK).body(courses);
	}
	
	@PostMapping
	public ResponseEntity<?> postMethodName(@RequestBody ReqStudent entity) {
<<<<<<< HEAD
=======
		
>>>>>>> vishal
		Student student = studentService.addStudent(entity);
		if(student != null) {
			return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse("Student Inserted: "+ student.getId(), 1));
		}
		return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Student not Inserted...!", 0));	
		
	}
	
	@PostMapping("/signin")
	public ResponseEntity<?> getMethodName(@RequestBody ReqStudentSignIn entity) {
		Student student = studentService.selectStudent(entity);
		if(student != null) {
			return ResponseEntity.status(HttpStatus.OK).body(student);
		}
		return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("invalid credentials", 0));
	}
	
	@PutMapping
	public ResponseEntity<?> putMethodName(@RequestBody ReqStudentUpdate entity) {
<<<<<<< HEAD
=======
		
>>>>>>> vishal
		Student student = studentService.updateStudent(entity);
		if(student != null) {
			return ResponseEntity.status(HttpStatus.OK).body(student);
		}
		return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("invalid credentials", 0));
	}
<<<<<<< HEAD
		
=======
	
	
>>>>>>> vishal
=======
    @Autowired
    private StudentService studentService;
    
    @GetMapping("/course")
    public ResponseEntity<?> getMethodName() {
        List<Course> courses = studentService.findAllCourses();
        return ResponseEntity.status(HttpStatus.OK).body(courses);
    }
    
    @PostMapping
    public ResponseEntity<?> postMethodName(@RequestBody ReqStudent entity) {
        Student student = studentService.addStudent(entity);
        if (student != null) {
            return ResponseEntity.status(HttpStatus.CREATED)
                .body(new ApiResponse("Student Inserted: " + student.getId(), 1));
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Student not Inserted...!", 0));    
    }
    
    @PostMapping("/signin")
    public ResponseEntity<?> getMethodName(@RequestBody ReqStudentSignIn entity) {
        Student student = studentService.selectStudent(entity);
        if (student != null) {
            return ResponseEntity.status(HttpStatus.OK).body(student);
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Invalid credentials", 0));
    }
    
    @PutMapping
    public ResponseEntity<?> putMethodName(@RequestBody ReqStudentUpdate entity) {
        Student student = studentService.updateStudent(entity);
        if (student != null) {
            return ResponseEntity.status(HttpStatus.OK).body(student);
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Invalid credentials", 0));
    }
>>>>>>> 6fe6fa52519273e9c64832371b759bc49cdf675f
}
