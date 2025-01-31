 package com.exam.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@ToString
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReqQuiz  {

//	private Long id;

	private String qTitle;
//	@Column(name = "Q_description")
//	private String qDescription;

	private String marksPerQue;

	private String passMarks;
	

	private String noOfQuestions;
	

	private boolean isActive=false;
	
	private Long subId;
	
	
}
