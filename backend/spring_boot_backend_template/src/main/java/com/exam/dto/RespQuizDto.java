package com.exam.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class RespQuizDto {
	public Long id;
	
	private String qTitle;
	
	private String marksPerQue;
	
	private String noOfQuestions;
	
	private String passMarks;
	
	private boolean isActive;	
}
