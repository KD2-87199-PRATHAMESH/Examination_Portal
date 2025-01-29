package com.exam.service;

import java.util.List;

import com.exam.dto.ReqStudent;
import com.exam.dto.ReqStudentSignIn;
import com.exam.entity.Course;
import com.exam.entity.Student;

public interface StudentService {
	
	List<Course> findAllCourses();

	Student addStudent(ReqStudent entity);

	Student selectStudent(ReqStudentSignIn entity);
	
}
