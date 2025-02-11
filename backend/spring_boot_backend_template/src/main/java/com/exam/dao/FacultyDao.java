package com.exam.dao;

<<<<<<< HEAD
<<<<<<< HEAD
=======
import java.util.List;
>>>>>>> vishal
=======
import java.util.List;
>>>>>>> 6fe6fa52519273e9c64832371b759bc49cdf675f
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.entity.Faculty;

public interface FacultyDao extends JpaRepository<Faculty, Long> {

<<<<<<< HEAD
	Optional<Faculty> findByEmailAndPassword(String email, String password);
<<<<<<< HEAD
=======
	List<Faculty> findByStatusTrue();
>>>>>>> vishal
	Optional<Faculty> findByEmail(String email);
	
=======
    Optional<Faculty> findByEmailAndPassword(String email, String password);

    List<Faculty> findByStatusTrue();
    
    Optional<Faculty> findByEmail(String email);

>>>>>>> 6fe6fa52519273e9c64832371b759bc49cdf675f
}
