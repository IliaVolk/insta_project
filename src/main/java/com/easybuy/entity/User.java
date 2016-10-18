package com.easybuy.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.validator.constraints.Email;

import javax.persistence.*;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.io.Serializable;


@Entity
@Table(name = "user")
public class User implements Serializable {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "login")
    @Pattern(regexp = "^[a-zA-Z0-9]+$", message = "must me alphanumerical")
    @Size(min = 4, max = 19, message = "must be between 4 and 19 characters long")
    private String login;

    @Column(name = "email")
    @Email
    @Size(max = 64)
    private String email;
    //@Size(min = 4, max = 40, message = "must be between 4 and 19 characters long")
    @Column(name = "password")
    //@Pattern(regexp = "^[a-zA-Z0-9]+$", message = "must be alphanumerical")
    @JsonIgnore
    private String password;

    @Enumerated
    @Column(name = "role")
    private UserRole role;



    public User(String login, String password) {
        this.login = login;
        this.password = password;
    }

    public User() {

    }


    public UserRole getRole() {
        return role;
    }

    public void setRole(UserRole role) {
        this.role = role;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
