import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-lookingforjob',
  templateUrl: './lookingforjob.component.html',
  styleUrls: ['./lookingforjob.component.css']
})
export class LookingforjobComponent implements OnInit {

  announcementDetails : any = null;
  applyinfos : any = null;

  announcementToUpdate = {
    id: "",
    jobTitle: "",
    description: "",
    email: "",
    companyName: ""
  }


  constructor(private service: Service1Service, private userService:UserService) {
    this.getAnnouncementsDetails();
  }

  ngOnInit(): void {
  }



    getAnnouncementsDetails(){
      this.service.getAnnouncements().subscribe(
          (resp) => {
            console.log(resp);
            this.announcementDetails = resp;
          },
          (err) => {
            console.log(err);
          }
      )
    }

    viewAnnouncement(announcement: any){
      this.announcementToUpdate = announcement;
    }



    applyJob(applyForm: { value: any; }){
      this.service.applyJob(applyForm.value).subscribe(
        (resp) => {
          console.log(resp);
          this.applyinfos = resp;
        },
        (err) => {
          console.log(err);
        }
      )
  }
}
