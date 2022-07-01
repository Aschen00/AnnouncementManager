import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-announcementslist',
  templateUrl: './announcementslist.component.html',
  styleUrls: ['./announcementslist.component.css']
})
export class AnnouncementslistComponent implements OnInit {

  announcementDetails : any = null;
  announcementToUpdate = {
    id: "",
    jobTitle: "",
    description: "",
    companyName: "",
    email: ""
  }


  constructor(private service: Service1Service) {
    this.getAnnouncementsDetails();
  }

  ngOnInit(): void {
  }


    addAnnounce(addForm: { value: any; }){
        this.service.addAnnouncement(addForm.value).subscribe(
          (resp) => {
            this.announcementDetails = resp;
          },
          (err) => {
          }
        )
    }


    getAnnouncementsDetails(){
      this.service.getAnnouncements().subscribe(
          (resp) => {
            this.announcementDetails = resp;
          },
          (err) => {
          }
      )
    }

    


    deleteAnnouncement(announcement: { id: number; }) {
      this.service.deleteAnnouncement(announcement.id).subscribe(
        (resp) => {
          this.announcementDetails = resp;
        },
        (err) => {
        }
      )
    }

    updateAnnouncement(announcement: any){
      this.announcementToUpdate = announcement;
    }

    updateAnnouncementOn(){
      this.service.updateAnnouncement(this.announcementToUpdate).subscribe(
        (resp) => {
          this.announcementDetails = resp;
        },
        (err) => {
        }
      )
    }

}
