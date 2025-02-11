package com.exam.dto;

import com.exam.entity.Degree;
import com.exam.entity.Specilization;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ReqFacultyUpdate {

	private Long id;
	
	private String fName;
	
	private String lName;

	private String mobNo;

	private Degree degree;
	
	private Specilization specilization;
	
}
