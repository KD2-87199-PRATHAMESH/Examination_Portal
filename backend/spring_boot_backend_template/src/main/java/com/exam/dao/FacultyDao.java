package com.exam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.entity.Faculty;

public interface FacultyDao extends JpaRepository<Faculty, Long> {

}
