package com.exam.controller;

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

import com.exam.dto.ApiResponse;
import com.exam.dto.ReqSubject;
import com.exam.entity.Subject;
import com.exam.service.SubjectService;



@RestController
@RequestMapping("/subject")
@CrossOrigin("*")
public class SubjectController {
	
	@Autowired
	private SubjectService subjectService;
	
	@PostMapping("/")
	public ResponseEntity<?> postMethodName(@RequestBody ReqSubject entity) {
		Subject subject = subjectService.addSubject(entity);
		if(subject != null) {
			return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse("Subject Inserted: "+ subject.getId(), 1));
		}
		return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Subject not Inserted...!", 0));
	}
	
	@GetMapping("/{subjectId}")
	public ResponseEntity<?> getSubject(@PathVariable("subjectId") Long subjectId) {
//		return this.subjectService.getSubject(subjectId);
		Subject subject=subjectService.getSubject(subjectId);
		
		if(subject!=null)
		{
		return ResponseEntity.status(HttpStatus.OK).body(subject);
		}
		
		return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Subject not found",0));
	}

	@GetMapping("/")
	public ResponseEntity<?> getAllSubjets() {
	
		return ResponseEntity.ok(this.subjectService.getAllSubjects());
	}

	@DeleteMapping("/{subjectId}")
	public ResponseEntity<?> deleteSubject(@PathVariable("subjectId") Long subjectId)
	{
		int count=subjectService.deleteSubject(subjectId);
		
		if(count==1)
		return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Subject Deleted Successfully...!", 1));
	
		return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Error While Deleting Subject...!", 0));
		
	}
	
}
