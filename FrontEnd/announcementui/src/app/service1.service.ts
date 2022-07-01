import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Announcement } from './announcement';


@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(private http:HttpClient) {}


  public addAnnouncement(announcement: any){
    return this.http.post("http://127.0.0.1:8080/addAnnouncement", announcement);
    
  }

  public getAnnouncements() {
    return this.http.get("http://127.0.0.1:8080/getAllAnnouncements");
  }

  public deleteAnnouncement(id: number) {
    return this.http.delete("http://127.0.0.1:8080/deleteAnnouncement?id=" +id);
  }

  public updateAnnouncement(announcement: any) {
    return this.http.put("http://127.0.0.1:8080/updateAnnouncement", announcement);
  }

  public applyJob(applytojob: any){
    return this.http.post("http://127.0.0.1:8080/addApply", applytojob)
  }

  public getApplies() {
    return this.http.get("http://127.0.0.1:8080/getAllApplies");
  }

  public deleteApply(id: number) {
    return this.http.delete("http://127.0.0.1:8080/deleteApply?id=" +id);
  }

}
