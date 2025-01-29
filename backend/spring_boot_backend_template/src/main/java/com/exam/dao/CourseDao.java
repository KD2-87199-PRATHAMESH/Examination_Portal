package com.exam.dao;


import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.entity.Course;

public interface CourseDao extends JpaRepository<Course, Long> {
	
}
