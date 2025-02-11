package com.exam.service;

import com.exam.dto.ReqFaculty;
import com.exam.dto.ReqFacultyUpdate;
import com.exam.dto.ReqStudentSignIn;
import com.exam.entity.Faculty;

public interface FacultyService {
    
    Faculty addFaculty(ReqFaculty reqFaculty);

    Faculty selectFaculty(ReqStudentSignIn entity);

<<<<<<< HEAD
	Faculty updateFaculty(ReqFacultyUpdate entity);
<<<<<<< HEAD
=======
	
	Faculty getFaculty(Long facultyId);
	
>>>>>>> vishal
	
=======
    Faculty updateFaculty(ReqFacultyUpdate entity);

    Faculty getFaculty(Long facultyId);
>>>>>>> 6fe6fa52519273e9c64832371b759bc49cdf675f
}
