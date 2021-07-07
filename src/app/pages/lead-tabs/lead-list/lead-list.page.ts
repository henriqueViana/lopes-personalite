import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.page.html',
  styleUrls: ['./lead-list.page.scss'],
})
export class LeadListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  unread(item) {
    console.log('item----', item);
  }

}
