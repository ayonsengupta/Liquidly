import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid = 'Iv1.8aacfd01eb8eb36e';
  private clientsecret = 'bb0ec41d4ff258e79eb77baeb9bfa9fb9a4cf1ed';

  constructor(private http : HttpClient) { 
    console.log("service is now ready!");
  	this.username = 'ayonsengupta';
  }

  getProfileInfo():Observable<any>{
  	return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  }

  getProfileRepos():Observable<any>{
  	return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  } 
  updateProfile(username:string){
  	this.username = username;
  }


}
