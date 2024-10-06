package com.star.Finance.Management.Model;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user_details")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    @Column(
            nullable = false,
            unique = true
    )
    private String email;
    @Column(
            nullable = false
    )
    private String password;

    @OneToMany(mappedBy = "user")
    @JsonManagedReference
    private List<Transaction> transactions;

    @OneToMany(mappedBy = "user")
    @JsonManagedReference
    private List<SavingsGoal> savingsGoals;

    @OneToMany(mappedBy = "user")
    @JsonManagedReference
    private List<Investment> investments;



}
