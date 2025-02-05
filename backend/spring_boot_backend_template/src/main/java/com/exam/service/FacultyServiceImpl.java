package com.exam.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.dao.FacultyDao;
import com.exam.dao.SubjectDao;
import com.exam.dto.ReqFaculty;
import com.exam.dto.ReqFacultyUpdate;
import com.exam.dto.ReqStudentSignIn;
import com.exam.entity.Faculty;
import com.exam.entity.Subject;

import jakarta.transaction.Transactional;

@Transactional
@Service
public class FacultyServiceImpl implements FacultyService {

	@Autowired
	private FacultyDao facultyDao;
	
	@Autowired
	private SubjectDao subjectDao;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public Faculty addFaculty(ReqFaculty reqFaculty) {
		Faculty faculty = modelMapper.map(reqFaculty, Faculty.class);
		Faculty inserted = facultyDao.save(faculty);
		Subject s = subjectDao.findById(reqFaculty.getSubjectId()).get();
		s.setFaculty(inserted);
		return inserted;
	}

	@Override
	public Faculty selectFaculty(ReqStudentSignIn entity) {
		Faculty f = facultyDao.findByEmailAndPassword(entity.getEmail(), entity.getPassword()).orElseThrow();
		return f;
	}

	@Override
	public Faculty updateFaculty(ReqFacultyUpdate entity) {
		Faculty f = facultyDao.findById(entity.getId()).get();
		f.setFName(entity.getFName());
		f.setLName(entity.getLName());
		f.setMobNo(entity.getMobNo());
		f.setDegree(entity.getDegree());
		f.setSpecilization(entity.getSpecilization());
		f = facultyDao.save(f);
		return f;
	}

}
