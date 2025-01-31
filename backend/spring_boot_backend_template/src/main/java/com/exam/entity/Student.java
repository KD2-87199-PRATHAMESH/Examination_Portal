package com.exam.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "student")
@Getter
@Setter
@NoArgsConstructor
public class Student extends BaseEntity {

	@Column(name = "f_name", length = 20)
	private String fName;
	
	@Column(name = "l_name", length = 20)
	private String lName;

	@Column(length = 40)
	private String email;

	@Column(nullable = false)
	@JsonIgnore
	private String password;
	
	@Column(name = "mob_no", length = 10)
	private String mobNo;

	@ManyToOne
	@JoinColumn(name = "selected_course")
	private Course selectedCourse;
	
	@Column(name = "status", nullable = false, columnDefinition = "TINYINT(1) DEFAULT 1")
	private boolean status = true;
	
}
