import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  //private key:string= '6fa6f1296448421890b60b2dc3b6755f';
  //private caminhoPadrao  = 'https://newsapi.org/v2';
  HttpClient: any;
  
  constructor(public http:HttpClient) { }

   public getTopHeadlines (country="us", page=1){
    let news = "https://newsapi.org/v2/top-headlines?country=us&page=1&category=technology&apiKey=6fa6f1296448421890b60b2dc3b6755f";
    return this.http.get(news);
    }


}

