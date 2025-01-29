package com.exam.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.dao.FacultyDao;
import com.exam.dto.ReqFaculty;
import com.exam.dto.ReqStudentSignIn;
import com.exam.entity.Faculty;

import jakarta.transaction.Transactional;

@Transactional
@Service
public class FacultyServiceImpl implements FacultyService {

	@Autowired
	private FacultyDao facultyDao;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public Faculty addFaculty(ReqFaculty reqFaculty) {
		Faculty faculty = modelMapper.map(reqFaculty, Faculty.class);
		Faculty inserted = facultyDao.save(faculty);
		return inserted;
	}

	@Override
	public Faculty selectFaculty(ReqStudentSignIn entity) {
		Faculty f = facultyDao.findByEmailAndPassword(entity.getEmail(), entity.getPassword()).orElseThrow();
		return f;
	}

}
