import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service'

@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.page.html',
  styleUrls: ['./lead-list.page.scss'],
})
export class LeadListPage implements OnInit {

  public user

  constructor(private userService: UserService) { }

  ngOnInit() {
    // caso precise do usuário papa alguma coisa
    this.user = this.userService.getUser()
  }

  unread(item) {
    console.log('item----', item);
  }

}
