package com.exam.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@ToString
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Question extends BaseEntity {

	@Column(length=500)
	private String content;
//	private String image;
	
	private String option1;
	private String option2;
	private String option3;
	private String option4;
	private String answer;
	
//	@JsonIgnore
	@ManyToOne(fetch = FetchType.EAGER)
	private Quiz quiz;
}
