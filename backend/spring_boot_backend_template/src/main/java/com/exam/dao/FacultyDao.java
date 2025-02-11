package com.exam.dao;

<<<<<<< HEAD
=======
import java.util.List;
>>>>>>> vishal
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.entity.Faculty;

public interface FacultyDao extends JpaRepository<Faculty, Long> {

	Optional<Faculty> findByEmailAndPassword(String email, String password);
<<<<<<< HEAD
=======
	List<Faculty> findByStatusTrue();
>>>>>>> vishal
	Optional<Faculty> findByEmail(String email);
	
}
