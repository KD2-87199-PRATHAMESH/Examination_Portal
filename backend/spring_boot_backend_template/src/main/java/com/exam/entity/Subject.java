package com.exam.entity;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
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
public class Subject extends BaseEntity{
	
	private String title;
	
	private boolean isActive=false;
	@JsonIgnore
	@OneToMany(mappedBy = "subject",fetch = FetchType.EAGER,cascade = CascadeType.ALL)
	private List<Quiz> quizzes=new ArrayList<>();
	
	
}
