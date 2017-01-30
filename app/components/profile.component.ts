import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

import "rxjs/add/operator/map";

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: "profile.component.html",
})
export class ProfileComponent  {
    user: any[] = [];
    repos: any[] = [];

    username: string;
    constructor( private githubservice: GithubService){
          this.user = null;
    }

    searchUser(){
      this.githubservice.updateUser(this.username);

      this.githubservice.getUser().subscribe(user => {
          //console.log(user);
          this.user = user;
      });

      this.githubservice.getRepos().subscribe(repos => {
          this.repos = repos;
      });
    }
}
