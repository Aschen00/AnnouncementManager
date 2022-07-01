package com.job.announcement.repository;

import com.job.announcement.model.Announcement;
import com.job.announcement.model.Apply;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplyRepository extends JpaRepository<Apply, Long> {
}
