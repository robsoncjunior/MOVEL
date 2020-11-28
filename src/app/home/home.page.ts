import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  personas = [
    {
      nome :"Aplicação Móvel",
      url : "https://www.jlgregorio.com.br/wp-content/uploads/2017/12/20160529064654-shutterstock-248776741-e1514230940122.jpeg"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
