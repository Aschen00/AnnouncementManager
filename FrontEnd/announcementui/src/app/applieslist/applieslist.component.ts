import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-applieslist',
  templateUrl: './applieslist.component.html',
  styleUrls: ['./applieslist.component.css']
})
export class ApplieslistComponent implements OnInit {

  applyinfos : any = null;

  applyToUpdate = {
    id: "",
    fullName: "",
    email: "",
    phone: "",
    languages: "",
    experiences: "",
    education: "",
    skills: "",
    about: ""
  }

  constructor(private service: Service1Service) {
    this.getApplyDetails();
  }

  ngOnInit(): void {
  }

  getApplyDetails(){
    this.service.getApplies().subscribe(
        (resp) => {
          console.log(resp);
          this.applyinfos = resp;
        },
        (err) => {
          console.log(err);
        }
    )
  }

  viewApplies(apply: any){
    this.applyToUpdate = apply;
  }

  deleteApply(apply: { id: number; }) {
    this.service.deleteApply(apply.id).subscribe(
      (resp) => {
        this.applyinfos = resp;
      },
      (err) => {
      }
    )
  }

}
