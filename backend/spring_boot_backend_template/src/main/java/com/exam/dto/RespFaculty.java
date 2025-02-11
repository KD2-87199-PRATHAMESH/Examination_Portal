


	
	
	
	
	package com.exam.dto;

	import com.exam.entity.Degree;
	import com.exam.entity.Specilization;

	import jakarta.validation.constraints.NotBlank;
	import jakarta.validation.constraints.NotNull;
	import lombok.Getter;
	import lombok.NoArgsConstructor;
	import lombok.Setter;

	@Setter
	@Getter
	@NoArgsConstructor
	public class RespFaculty {

		private String fName;
		
		private String lName;

		private String email;

		private String password;
		
		private String mobNo;

		private Degree degree;
		
		private Specilization specilization;
		
//		private Long subjectId;
			
		
	}


