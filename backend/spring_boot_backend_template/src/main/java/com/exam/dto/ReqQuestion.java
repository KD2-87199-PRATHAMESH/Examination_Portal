package com.exam.dto;

import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToOne;
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
public class ReqQuestion  {

	private String content;
	private String image;
	
	private String option1;
	private String option2;
	private String option3;
	private String option4;
	
	
	
}
