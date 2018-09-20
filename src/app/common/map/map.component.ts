import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title = 'My first AGM project';
  @Input() location: string;

  lat = 51.678418;
  lng = 7.809007;

  constructor() { }

  ngOnInit() {

  }

}
