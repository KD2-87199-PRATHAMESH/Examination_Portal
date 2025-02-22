package com.exam.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "faculty")
@Getter
@Setter
@NoArgsConstructor
public class Faculty extends BaseEntity {
    
    @Column(name = "f_name", length = 20)
    private String fName;
    
    @Column(name = "l_name", length = 20)
    private String lName;

    @Column(length = 40)
    private String email;

    @Column(nullable = false)
    @JsonIgnore
    private String password;
    
    @Column(name = "mob_no", length = 10)
    private String mobNo;

<<<<<<< HEAD
	@Enumerated(EnumType.STRING)
	private Degree degree;
	
	@Enumerated(EnumType.STRING)
	private Specilization specilization;
	
<<<<<<< HEAD
	@Column(name = "status", nullable = false, columnDefinition = "TINYINT(1) DEFAULT 1")
=======
	@Column(name = "status", nullable = false)
>>>>>>> vishal
	private boolean status = true;
	
=======
    @Enumerated(EnumType.STRING)
    private Degree degree;
    
    @Enumerated(EnumType.STRING)
    private Specilization specilization;

    @Column(name = "status", nullable = false, columnDefinition = "TINYINT(1) DEFAULT 1")
    private boolean status = true;
>>>>>>> 6fe6fa52519273e9c64832371b759bc49cdf675f
}
