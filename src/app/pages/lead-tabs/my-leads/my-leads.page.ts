import { Component, OnInit } from '@angular/core';
import { Lead } from 'src/app/models/lead.model';

@Component({
  selector: 'app-my-leads',
  templateUrl: './my-leads.page.html',
  styleUrls: ['./my-leads.page.scss'],
})
export class MyLeadsPage implements OnInit {
  leadList: Lead[] = [
    {
      area: '90m²',
      location: 'Rio de Janeiro',
      name: 'Thiago Melin',
      price: 50.0,
      realStateType: 'house',
      rooms: 4,
    },
    {
      area: '172m²',
      location: 'Rio de Janeiro',
      name: 'Pedro Cacique',
      price: 170.0,
      realStateType: 'house',
      rooms: 3,
    },
    {
      area: '87m²',
      location: 'São Paulo',
      name: 'Henrique Fritador',
      price: 70.0,
      realStateType: 'apt',
      rooms: 2,
    },
  ];
  constructor() {}

  ngOnInit() {}
}
