package com.exam.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.dao.CourseDao;
import com.exam.dao.StudentDao;
import com.exam.dto.ReqStudent;
import com.exam.dto.ReqStudentSignIn;
import com.exam.dto.ReqStudentUpdate;
import com.exam.entity.Course;
import com.exam.entity.Student;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class StudentServiceImpl implements StudentService {
	
	@Autowired
	private CourseDao courseDao;
	
	@Autowired
	private StudentDao studentDao;
	
	@Autowired
	private ModelMapper modelMapper;

<<<<<<< HEAD
<<<<<<< HEAD
	private PasswordEncoderService pass = new PasswordEncoderService();
	
=======
>>>>>>> vishal
=======
	private PasswordEncoderService pass = new PasswordEncoderService();
	
>>>>>>> 6fe6fa52519273e9c64832371b759bc49cdf675f
	@Override
	public List<Course> findAllCourses() {
		List<Course> courses =  courseDao.findAll();
		return courses;
	}

	@Override
	public Student addStudent(ReqStudent entity) {
		Course c = courseDao.findById(entity.getSelectedCourse()).orElseThrow();
		Student s = modelMapper.map(entity, Student.class);
		s.setSelectedCourse(c);
<<<<<<< HEAD
<<<<<<< HEAD
		s.setPassword(pass.encodePassword(s.getPassword()));
=======
>>>>>>> vishal
=======
		s.setPassword(pass.encodePassword(s.getPassword()));
>>>>>>> 6fe6fa52519273e9c64832371b759bc49cdf675f
		s = studentDao.save(s);
		return s;
	}

	@Override
	public Student selectStudent(ReqStudentSignIn entity) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6fe6fa52519273e9c64832371b759bc49cdf675f
		Student s = studentDao.findByEmail(entity.getEmail()).orElseThrow();
		if(pass.verifyPassword(entity.getPassword(), s.getPassword()))
			return s;
		else
			return null;
<<<<<<< HEAD
=======
		Student s = studentDao.findByEmailAndPassword(entity.getEmail(), entity.getPassword()).orElseThrow();
		return s;
>>>>>>> vishal
=======
>>>>>>> 6fe6fa52519273e9c64832371b759bc49cdf675f
	}

	@Override
	public Student updateStudent(ReqStudentUpdate entity) {
		Student s = studentDao.findById(entity.getId()).get();
		Course c = courseDao.findById(entity.getSelectedCourse()).get();
		s.setFName(entity.getFName());
		s.setLName(entity.getLName());
		s.setMobNo(entity.getMobNo());
		s.setSelectedCourse(c);
		s = studentDao.save(s);
		return s;
	}

}
