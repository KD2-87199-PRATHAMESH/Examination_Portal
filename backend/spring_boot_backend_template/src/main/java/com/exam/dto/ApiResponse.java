package com.exam.dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ApiResponse {
	
	private LocalDateTime time = LocalDateTime.now();

	private String msg;
	
	private int status;

	public ApiResponse(String m, int s) {
		msg = m;
		status = s;
	}
	public ApiResponse(String m) {
		msg = m;
		
	}

}

