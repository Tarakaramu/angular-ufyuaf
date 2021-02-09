import { Component, Input, OnInit } from '@angular/core';
import {Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  // input property product
  @Input() productInner;
  // output is passed from child to parent.
  @Output() notifySiva = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}