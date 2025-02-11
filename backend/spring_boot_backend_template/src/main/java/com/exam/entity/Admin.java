
package com.exam.entity;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "admin")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Admin extends BaseEntity {
    

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String email;
    
    @Column(name = "status", nullable = false, columnDefinition = "TINYINT(1) DEFAULT 1")
	private boolean status = true;
    
    
}
