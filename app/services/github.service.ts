import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class GithubService {
  private username: string;

  private client_id = '4e3626e3d534022c554b';
  private client_secret = '4b463a384f772772e41687fb46ca177247057e66';

  constructor( private http: Http){
    console.log(" Github service is ready");
    this.username = "sivamotamarri";
  }

  getUser(){
    return this.http.get("http://api.github.com/users/"+this.username+"?client_id="+this.client_id+"&client_secret="+this.client_secret)
                .map(res => res.json())
  }

  getRepos(){
    return this.http.get("http://api.github.com/users/"+this.username+"/repos?client_id="+this.client_id+"&client_secret="+this.client_secret)
                .map(res => res.json())
  }

  updateUser(username: string){
     this.username = username;
  }
}
