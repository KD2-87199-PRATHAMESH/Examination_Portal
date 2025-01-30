 package com.exam.dto;

import java.util.Set;

import com.exam.entity.BaseEntity;

import java.util.HashSet;
import java.util.Locale.Category;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
//	@Column(name = "Q_description")
//	private String qDescription;

	private String marksPerQue;

	private String passMarks;
	

	private String noOfQuestions;
	

	private boolean isActive=false;
	
	private Long subId;
	
	
}
