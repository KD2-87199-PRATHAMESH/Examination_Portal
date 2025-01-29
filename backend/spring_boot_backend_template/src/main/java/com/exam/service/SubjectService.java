package com.exam.service;

import java.util.List;
import java.util.Set;

import com.exam.dto.ReqSubject;
import com.exam.entity.Subject;

public interface SubjectService {
	public Subject addSubject(ReqSubject reqSubject);
	public Subject updateSubject(ReqSubject reqSubject);
	public List<Subject> getAllSubjects();
	public Subject getSubject(Long subId);
	public int deleteSubject(Long subId);

}
