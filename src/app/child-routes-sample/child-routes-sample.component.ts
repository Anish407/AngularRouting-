import { Component, OnInit } from '@angular/core';
import { anim, voidTrigger } from './animate';


@Component({
  selector: 'app-child-routes-sample',
  templateUrl: './child-routes-sample.component.html',
  styleUrls: ['./child-routes-sample.component.css'],
  animations: [anim, voidTrigger]
})
export class ChildRoutesSampleComponent implements OnInit {
  showMe:boolean;
  constructor() { }

  ngOnInit() {
  }

}
