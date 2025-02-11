package com.exam.entity;


import java.time.LocalDate;
import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@MappedSuperclass
@Getter
@Setter
@NoArgsConstructor
public class BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@CreationTimestamp
	@Column(name = "created_on", nullable = false)
	private LocalDate createdOn;
	
	@UpdateTimestamp
	@Column(name = "updated_on", nullable = false)
	private LocalDateTime updatedOn;

}
