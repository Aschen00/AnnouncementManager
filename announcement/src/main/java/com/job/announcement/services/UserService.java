package com.job.announcement.services;

import com.job.announcement.model.Role;
import com.job.announcement.model.User;
import com.job.announcement.repository.RoleDao;
import com.job.announcement.repository.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private RoleDao roleDao;

    @Autowired
    private PasswordEncoder passwordEncoder;


    public void initRolesAndUser(){
        Role adminRole = new Role();
        adminRole.setRoleName("Admin");
        adminRole.setRoleDesc("All perms");
        roleDao.save(adminRole);

        Role userRole = new Role();
        userRole.setRoleName("User");
        userRole.setRoleDesc("Normal perms");
        roleDao.save(userRole);

        User administrator = new User();
        administrator.setUserFirstName("Anas");
        administrator.setUserLastName("Ouchen");
        administrator.setUsername("anas");
        administrator.setUserPassword(getEncodedPassword("ouchen"));
        Set<Role> adminRoles = new HashSet<>();
        adminRoles.add(adminRole);
        administrator.setRole(adminRoles);
        userDao.save(administrator);

/*        User user = new User();
        user.setUserFirstName("Amine");
        user.setUserLastName("Ouchen");
        user.setUsername("amine");
        user.setUserPassword(getEncodedPassword("ouchen"));
        Set<Role> userRoles = new HashSet<>();
        userRoles.add(userRole);
        user.setRole(userRoles);
        userDao.save(user);*/
    }

    public User registerNewUser(User user){
        Role role = roleDao.findById("User").get();
        Set<Role> roles = new HashSet<>();
        roles.add(role);
        user.setRole(roles);

        user.setUserPassword(getEncodedPassword(user.getUserPassword()));
        return userDao.save(user);
    }
    public String getEncodedPassword(String password){
        return passwordEncoder.encode(password);
    }
}
