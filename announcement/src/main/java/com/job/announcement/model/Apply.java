package com.job.announcement.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Apply {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String fullName;
    private String phone;
    private String email;
    private String languages;
    private String experiences;
    private String education;
    private String skills;
    private String about;

    public Apply() {
    }

    public Apply(long id, String fullName, String phone, String email, String languages, String experiences, String education, String skills, String about) {
        this.id = id;
        this.fullName = fullName;
        this.phone = phone;
        this.email = email;
        this.languages = languages;
        this.experiences = experiences;
        this.education = education;
        this.skills = skills;
        this.about = about;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLanguages() {
        return languages;
    }

    public void setLanguages(String languages) {
        this.languages = languages;
    }

    public String getExperiences() {
        return experiences;
    }

    public void setExperiences(String experiences) {
        this.experiences = experiences;
    }

    public String getEducation() {
        return education;
    }

    public void setEducation(String education) {
        this.education = education;
    }

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    @Override
    public String toString() {
        return "Apply{" +
                "fullName='" + fullName + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", languages='" + languages + '\'' +
                ", experiences='" + experiences + '\'' +
                ", education='" + education + '\'' +
                ", skills='" + skills + '\'' +
                ", about='" + about + '\'' +
                '}';
    }
}
