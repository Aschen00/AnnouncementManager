package com.job.announcement.repository;


import com.job.announcement.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Map;


@Repository
public interface RoleDao extends JpaRepository<Role, String> {
}
