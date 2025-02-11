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
	
	private PasswordEncoderService pass = new PasswordEncoderService();
	
	@Override
	public Faculty addFaculty(ReqFaculty reqFaculty) {
		Faculty faculty = modelMapper.map(reqFaculty, Faculty.class);
		faculty.setPassword(pass.encodePassword(reqFaculty.getPassword()));
		Faculty inserted = facultyDao.save(faculty);
		Subject s = subjectDao.findById(reqFaculty.getSubjectId()).get();
		s.setFaculty(inserted);
		return inserted;
	}

	@Override
	public Faculty selectFaculty(ReqStudentSignIn entity) {
		Faculty f = facultyDao.findByEmail(entity.getEmail()).orElseThrow();
		if(pass.verifyPassword(entity.getPassword(), f.getPassword())) {
			return f;			
		}
		return null;
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
<<<<<<< HEAD
=======
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
		
		private PasswordEncoderService pass = new PasswordEncoderService();
		
		@Override
		public Faculty addFaculty(ReqFaculty reqFaculty) {
			Faculty faculty = modelMapper.map(reqFaculty, Faculty.class);
			faculty.setPassword(pass.encodePassword(reqFaculty.getPassword()));
			Faculty inserted = facultyDao.save(faculty);
			Subject s = subjectDao.findById(reqFaculty.getSubjectId()).get();
			s.setFaculty(inserted);
			return inserted;
		}

		@Override
		public Faculty selectFaculty(ReqStudentSignIn entity) {
			Faculty f = facultyDao.findByEmail(entity.getEmail()).orElseThrow();
			if(pass.verifyPassword(entity.getPassword(), f.getPassword())) {
				return f;			
			}
			return null;
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

>>>>>>> vishal

}
