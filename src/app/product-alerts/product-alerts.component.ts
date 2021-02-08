import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  // input property product
  @Input() productInner;
  constructor() { }

  ngOnInit() {
  }

}