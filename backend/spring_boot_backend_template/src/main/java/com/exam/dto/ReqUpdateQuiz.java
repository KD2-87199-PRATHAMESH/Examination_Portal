 package com.exam.dto;


import com.exam.entity.BaseEntity;

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
public class ReqUpdateQuiz  extends BaseEntity {

	private Long id;

	private String qTitle;

	private String marksPerQue;

	private String passMarks;
	
	private String noOfQuestions;
	
}
