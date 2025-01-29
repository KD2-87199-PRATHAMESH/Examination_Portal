 package com.exam.entity;

import java.util.Set;
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

@Entity
@ToString
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Quiz extends BaseEntity {

	@Column(name = "Q_title")
	private String qTitle;
	@Column(name = "Q_description")
	private String qDescription;
	@Column(name="max_marks")
	private String maxMarks;
	@Column(name="number_of_questions")
	private String noOfQuestions;
	
	@Column(name="Q_Status")
	private boolean isActive=false;
	
	@ManyToOne(fetch=FetchType.EAGER)
	private Subject subject;
	
	@OneToMany(mappedBy = "quiz",fetch=FetchType.LAZY,cascade = CascadeType.ALL)
	private Set<Question> questions=new HashSet<>();
}
