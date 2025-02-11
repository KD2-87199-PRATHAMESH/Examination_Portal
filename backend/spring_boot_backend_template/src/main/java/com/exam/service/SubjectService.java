package com.exam.service;

import java.util.List;
import java.util.Set;

import com.exam.dto.ApiResponse;
import com.exam.dto.ReqSubject;
import com.exam.dto.ReqUpdateSubject;
import com.exam.entity.Subject;

public interface SubjectService {
	public Subject addSubject(ReqSubject reqSubject);
	public Subject  updateSubject(ReqUpdateSubject reqUpdateSubject );
//	public Subject  updateSubject(Long Subid,ReqUpdateSubject reqUpdateSubject );
	public List<Subject> getAllSubjects();
	public Subject getSubject(Long subId);
	public int deleteSubject(Long subId);
	
	public List<Subject> findByCourseId(Long courseId);
	
	public Subject findByFacultyId(Long facultyId);

}
