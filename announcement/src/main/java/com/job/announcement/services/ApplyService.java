package com.job.announcement.services;


import com.job.announcement.model.Announcement;
import com.job.announcement.model.Apply;
import com.job.announcement.repository.AnnouncementRepository;
import com.job.announcement.repository.ApplyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class ApplyService {

    @Autowired
    private ApplyRepository repo;

    public ApplyService(ApplyRepository repo) {
        this.repo = repo;
    }

    public List<Apply> getAllApplies(){
        return (List<Apply>) repo.findAll();
    }

    public Apply addApply(Apply apply){
        return repo.save(apply);
    }

    public String deleteApply(long id){
        String result;
        try{
            repo.deleteById(id);
            result = " Apply deleted ";
        }   catch (Exception e){
            result = " Apply cannot be deleted ";
        }
        return result;
    }
}
