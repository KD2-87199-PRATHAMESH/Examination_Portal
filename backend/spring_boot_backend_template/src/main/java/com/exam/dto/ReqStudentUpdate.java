package com.exam.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ReqStudentUpdate {

	private Long id;
	
	private String fName;
	
	private String lName;
	
	private String mobNo;

	private Long selectedCourse;
	
}
