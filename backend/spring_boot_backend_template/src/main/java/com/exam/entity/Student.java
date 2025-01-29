package com.exam.entity;

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
	private String password;
	
	@Column(name = "mob_no", length = 10)
	private String mobNo;

	@ManyToOne
	@JoinColumn(name = "selected_course")
	private Course selectedCourse;
	
}
