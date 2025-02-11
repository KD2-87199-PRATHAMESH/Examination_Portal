package com.exam.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.dao.AdminDao;
import com.exam.dao.FacultyDao;
import com.exam.dto.AdminSignInReq;
import com.exam.entity.Admin;
import com.exam.entity.Faculty;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {

	@Autowired
	private FacultyDao facultyDao;
	
	@Autowired
	private AdminDao adminDao;

	@Override
	public int deleteFaculty(Long FacultyId) {
		// TODO Auto-generated method stub
		
	Faculty faculty=facultyDao.findById(FacultyId).get();
	
		if(faculty != null)
		{
		faculty.setStatus(false);
		return 1;
		}
		
		return 0;
		}

	@Override
	public List<Faculty> getFaculties() {
		// TODO Auto-generated method stub
		List<Faculty> list=facultyDao.findByStatusTrue();
		
		
		return list;
	}

	@Override
	public Admin selectAdmin(AdminSignInReq entity) {
		// TODO Auto-generated method stub
		
		Admin admin =adminDao.findByEmailAndPassword(entity.getEmail(),entity.getPassword()).orElseThrow();
		return admin;
	}

	
}
