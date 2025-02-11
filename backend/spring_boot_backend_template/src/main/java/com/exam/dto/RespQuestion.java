package com.exam.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class RespQuestion {

	private Long id;
	
	private String content;
	
	private String option1;
	private String option2;
	private String option3;
	private String option4;
	private String answer;
	
}
