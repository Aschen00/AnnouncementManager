package com.job.announcement.services;

import com.job.announcement.model.Role;
import com.job.announcement.repository.RoleDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class RoleService {

    @Autowired
    private RoleDao roleDao;

    public RoleService(RoleDao roleDao) {
        this.roleDao = roleDao;
    }

    public Role createNewRole(Role role){
        return roleDao.save(role);
    }

}
