package com.easybuy.service;

import com.easybuy.entity.User;
import com.easybuy.entity.UserRole;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Override
    public User getUser(String login) {

        return new User("test", "test");
    }

    @Override
    public void saveUser(User user) {

        user.setRole(UserRole.ROLE_USER);
        System.out.println("saving user: " + user.getLogin());

    }




}
