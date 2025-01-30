 package com.exam.entity;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Locale.Category;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
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
//	@Column(name = "Q_description")
//	private String qDescription;
	@Column(name="marks_per_que")
	private String marksPerQue;
	@Column(name="number_of_questions")
	private String noOfQuestions;
	
	@Column(name="pass_marks")
	private String passMarks;
	
	@Column(name="Q_Status")
	private boolean isActive=false;
	
//	@JsonIgnore
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name = "subject_id", nullable = false)
	private Subject subject;
	@JsonIgnore
	@OneToMany(mappedBy = "quiz",fetch=FetchType.LAZY,cascade = CascadeType.ALL)
	private List<Question> questions=new ArrayList<>();
}
