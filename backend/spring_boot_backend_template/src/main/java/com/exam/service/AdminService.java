package com.exam.service;

import java.util.List;

import com.exam.dto.AdminSignInReq;
import com.exam.entity.Admin;
import com.exam.entity.Faculty;

public interface AdminService {

	public int deleteFaculty(Long FacultyId);
	public List<Faculty> getFaculties();
	public Admin selectAdmin(AdminSignInReq entity);
	
}
