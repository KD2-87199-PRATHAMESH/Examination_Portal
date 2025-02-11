package com.exam.service;

import com.exam.dto.ReqFaculty;
import com.exam.dto.ReqFacultyUpdate;
import com.exam.dto.ReqStudentSignIn;
import com.exam.entity.Faculty;

public interface FacultyService {
	
	Faculty addFaculty(ReqFaculty reqFaculty);

	Faculty selectFaculty(ReqStudentSignIn entity);

	Faculty updateFaculty(ReqFacultyUpdate entity);
	
	Faculty getFaculty(Long facultyId);
	
	
}
