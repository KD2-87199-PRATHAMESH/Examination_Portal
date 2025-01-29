package com.exam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.dto.ApiResponse;
import com.exam.dto.ReqFaculty;
import com.exam.dto.ReqStudentSignIn;
import com.exam.entity.Degree;
import com.exam.entity.Faculty;
import com.exam.entity.Specilization;
import com.exam.entity.Student;
import com.exam.service.FacultyService;



@RestController
@RequestMapping("/faculty")
@CrossOrigin("*")
public class FacultyController {
	
	@Autowired
	private FacultyService facultyService;
	
	@PostMapping
	public ResponseEntity<?> postMethodName(@RequestBody ReqFaculty entity) {
		Faculty faculty = facultyService.addFaculty(entity);
		if(faculty != null) {
			return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse("Faculty Inserted: "+ faculty.getId(), 1));
		}
		return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Faculty not Inserted...!", 0));
	}
	
	@PostMapping("/signin")
	public ResponseEntity<?> getMethodName(@RequestBody ReqStudentSignIn entity) {
		Faculty f = facultyService.selectFaculty(entity);
		if(f != null) {
			return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse("faculty logged in ", 1));
		}
		return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("invalid credentials", 0));
	}
	
	@GetMapping("/degrees")
	public Degree[] getMethodName() {
		return Degree.values();
	}

	@GetMapping("/specs")
	public Specilization[] getMethodName1() {
		return Specilization.values();
	}
	
}
