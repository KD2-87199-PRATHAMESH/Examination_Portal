package com.exam.service;

import java.util.List;
import java.util.Set;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.dao.SubjectDao;
import com.exam.dto.ReqSubject;
import com.exam.entity.Subject;

import jakarta.transaction.Transactional;


@Service
@Transactional
public class SubjectServiceImpl implements SubjectService{
	@Autowired
	private SubjectDao subjectDao;
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public Subject addSubject(ReqSubject reqSubject) {
		// TODO Auto-generated method stub
		
		Subject subject=modelMapper.map(reqSubject,Subject.class);
		
		Subject iSubject= subjectDao.save(subject);
		iSubject.setActive(true);
		return iSubject;
	}

	@Override
	public Subject updateSubject(ReqSubject reqSubject) {
		// TODO Auto-generated method stub
		Subject subject=modelMapper.map(reqSubject,Subject.class);
		
		Subject iSubject= subjectDao.save(subject);
		return iSubject;
	}

	@Override
	public List<Subject> getAllSubjects() {
		// TODO Auto-generated method stub
		return this.subjectDao.findByIsActiveTrue();
	}

	@Override
	public Subject getSubject(Long subId) {
		// TODO Auto-generated method stub
		Subject subject=subjectDao.findById(subId).get();
		
		if(subject.isActive() && subject !=null)
		{
			return subject;
		}
		
		return null;
		
	}

	@Override
	public int deleteSubject(Long subId) {
		// TODO Auto-generated method stub
	Subject subject=subjectDao.findById(subId).get();
	subject.setActive(false);
	
	if(subject.isActive())
	{
		return 0;
	}
	
	return 1;
		
	}

}
