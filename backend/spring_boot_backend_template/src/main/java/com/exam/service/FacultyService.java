package com.exam.service;

import com.exam.dto.ReqFaculty;
import com.exam.entity.Faculty;

public interface FacultyService {
	
	Faculty addFaculty(ReqFaculty reqFaculty);
	
}
