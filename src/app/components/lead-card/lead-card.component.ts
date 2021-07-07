import { Component, Input, OnInit } from '@angular/core';
import { Lead } from 'src/app/models/lead.model';

@Component({
  selector: 'app-lead-card',
  templateUrl: './lead-card.component.html',
  styleUrls: ['./lead-card.component.scss'],
})
export class LeadCardComponent implements OnInit {
  @Input() data: Lead;

  constructor() {}

  ngOnInit() {
  }
}
