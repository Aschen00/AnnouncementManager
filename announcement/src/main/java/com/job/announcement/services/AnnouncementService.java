package com.job.announcement.services;

import com.job.announcement.model.Announcement;
import com.job.announcement.repository.AnnouncementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnnouncementService {

    @Autowired
    private AnnouncementRepository repo;

    public AnnouncementService(AnnouncementRepository repo) {
        this.repo = repo;
    }

    public List<Announcement> getAllAnnouncements(){
        return (List<Announcement>) repo.findAll();
    }

    public Announcement addAnnouncement(Announcement announcement){
        return repo.save(announcement);
    }

    public Optional<Announcement> getAnnouncementByID(long id){
        return repo.findById(id);
    }

    public String deleteAnnouncement(long id){
        String result;
        try{
            repo.deleteById(id);
            result = " Announce deleted ";
        }   catch (Exception e){
            result = " Announce cannot be deleted ";
        }
        return result;
    }

    public Announcement updateAnnouncement(Announcement announcement){
        Long id = announcement.getId();
        Announcement anc = repo.findById(id).get();

        anc.setJobTitle(announcement.getJobTitle());
        anc.setDescription(announcement.getDescription());
        anc.setCompanyName(announcement.getCompanyName());
        anc.setEmail(announcement.getEmail());
        return repo.save(anc);
    }
}

