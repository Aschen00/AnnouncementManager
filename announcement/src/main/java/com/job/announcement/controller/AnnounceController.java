package com.job.announcement.controller;

import com.job.announcement.model.Announcement;
import com.job.announcement.services.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class AnnounceController {


    @Autowired
    private AnnouncementService service;

    public AnnounceController(AnnouncementService service) {
        this.service = service;
    }

    @GetMapping("/getAllAnnouncements")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Announcement> getAllAnnouncements () {
        return service.getAllAnnouncements();
    }

    @PostMapping("/addAnnouncement")
    @CrossOrigin(origins = "http://localhost:4200")
    public Announcement addAnnouncement(@RequestBody Announcement announcement) {
        return service.addAnnouncement(announcement);
    }

    @GetMapping("/getAnnouncementByID/{id}")
    public Announcement getAnnouncementByID(@PathVariable long id) {
        return service.getAnnouncementByID(id).get();
    }

    @DeleteMapping("/deleteAnnouncement")
    @CrossOrigin(origins = "http://localhost:4200")
    public String deleteAnnouncement(@RequestParam long id) {
        return service.deleteAnnouncement(id);
    }


    @PutMapping("/updateAnnouncement")
    @CrossOrigin(origins = "http://localhost:4200")
    public Announcement updateAnnouncement(@RequestBody Announcement announcement){
        return service.updateAnnouncement(announcement);
    }
}
