package com.easybuy.service;


import com.easybuy.entity.User;

public interface UserService {

    User getUser(String login);

    void saveUser(User user);


}
