import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-google',
  templateUrl: './google.page.html',
  styleUrls: ['./google.page.scss'],
})
export class GooglePage implements OnInit {


  ionViewDidEnter(){

    this.apiService.getTopHeadlines().subscribe((data)=>{
       console.log(data);
     this.articles=data['articles'];
   });  
  }


  constructor(private apiService: ApiService){}

  
  articles;

  
  ngOnInit() {
  }

  

  }



