package com.exam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.dto.AdminSignInReq;
import com.exam.dto.ApiResponse;
import com.exam.dto.ReqStudentSignIn;
import com.exam.entity.Admin;
import com.exam.entity.Faculty;
import com.exam.service.AdminService;
//import com.exam.service.FacultyService;

@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
public class AdminController {

	@Autowired
	AdminService adminService;
	
	@DeleteMapping("/faculty/{facultyId}")
	public ResponseEntity<?> deleteFaculty(@PathVariable Long facultyId) {
		int count =adminService.deleteFaculty(facultyId);

		if (count == 1)
			return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Faculty Deleted Successfully...!", 1));

		return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Error While Deleting Faculty...!", 0));

	}
	
	@GetMapping("/faculty")
	public ResponseEntity<?> getFculties() {
		List<Faculty> list =adminService.getFaculties();

		if (!list.isEmpty())
			return ResponseEntity.status(HttpStatus.OK).body(list);

		return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Unable to find faculty"));

	}
	
	@PostMapping("/signin")
	public ResponseEntity<?> adminSignIn(@RequestBody AdminSignInReq entity ) {
		Admin admin =adminService.selectAdmin(entity);

		if (admin!=null)
			return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Admin Found", 1));

		return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Admin not Found",0));

	}
	
}
