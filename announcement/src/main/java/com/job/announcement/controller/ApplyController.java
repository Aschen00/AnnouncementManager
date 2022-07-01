package com.job.announcement.controller;

import com.job.announcement.model.Announcement;
import com.job.announcement.model.Apply;
import com.job.announcement.services.AnnouncementService;
import com.job.announcement.services.ApplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class ApplyController {
        @Autowired
        private ApplyService service;

        public ApplyController(ApplyService service) {
            this.service = service;
        }

        @GetMapping("/getAllApplies")
        @CrossOrigin(origins = "http://localhost:4200")
        public List<Apply> getAllApplies () {
            return service.getAllApplies();
        }

        @PostMapping("/addApply")
        @CrossOrigin(origins = "http://localhost:4200")
        public Apply addApply(@RequestBody Apply apply) {
            return service.addApply(apply);
        }

        @DeleteMapping("/deleteApply")
        @CrossOrigin(origins = "http://localhost:4200")
        public String deleteApply(@RequestParam long id) {
            return service.deleteApply(id);
        }
    }
