package com.exam.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "course")
@Getter
@Setter
@NoArgsConstructor
public class Course extends BaseEntity {
	
	@Column(name = "course_name", length = 20)
	private String courseName;
	
}
