import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {



  map: google.maps.Map;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  constructor() { }

  ionViewWillEnter(){
    this.exibirMapa()
  }

exibirMapa(){
  const posicao = new google.maps.LatLng(-22.986631, -43.201278);
  const opcoes = {
    center:posicao,
    zoom: 15,
    disableDefaultUI: true
  };


  this.map = new google.maps.Map(this.mapRef.nativeElement, opcoes);



}


  ngOnInit() {
  }

}
