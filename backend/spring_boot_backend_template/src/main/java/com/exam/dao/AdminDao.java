package com.exam.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.entity.Admin;

public interface AdminDao extends JpaRepository<Admin, Long>{
	
	Optional<Admin> findByEmailAndPassword(String email, String password);

}
