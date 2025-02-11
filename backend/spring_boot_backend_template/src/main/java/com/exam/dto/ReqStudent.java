package com.exam.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class ReqStudent {

	private String fName;
	
	private String lName;

	private String email;

	private String password;
	
	private String mobNo;

	private Long selectedCourse;
}
