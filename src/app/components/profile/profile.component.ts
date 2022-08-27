import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profiles:any;
  repositories:any;
  username:any;

  constructor(private profileService: ProfileService) {
  }

  findProfile(){
  	this.profileService.updateProfile(this.username);
  	this.profileService.getProfileInfo().subscribe(profile => {
  		console.log(profile);
  		this.profiles = profile;
  	});

  	this.profileService.getProfileRepos().subscribe(repos => {

      repos.sort((a:any,b:any)=>{
        a.stargazers_count - b.stargazers_count
      })
  		console.log(repos, "reposss");
  		this.repositories = repos;
      
      
  	})  	
  }

  ngOnInit(): void {
  }
  


}
