import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Lead } from 'src/app/models/lead.model';

@Component({
  selector: 'app-lead-card',
  templateUrl: './lead-card.component.html',
  styleUrls: ['./lead-card.component.scss'],
})
export class LeadCardComponent implements OnInit {
  @Input() data: Lead;
  @Input() isMyLeads = false;

  @Output() clickEvent = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.data.price = this.data.price ? null : this.getRandomIntInclusive(40, 150);
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
