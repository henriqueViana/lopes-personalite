import { Component, OnInit } from '@angular/core';
import { Lead } from 'src/app/models/lead.model';
import { UserService } from '../../../services/user/user.service'
import { LeadsService } from '../../../services/leads/leads.service'
import { LoadingService } from '../../../helpers/loading/loading.service'
import { AlertService } from '../../../helpers/alert/alert.service'

@Component({
  selector: 'app-my-leads',
  templateUrl: './my-leads.page.html',
  styleUrls: ['./my-leads.page.scss'],
})
export class MyLeadsPage implements OnInit {
  public user

  leadList: Lead[] = []
  constructor(
    private userService: UserService,
    private leadsService: LeadsService,
    private loadingService: LoadingService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.loadingService.present()

    const { id } = this.userService.getUser()

    this.leadsService.getLeadsById(id)
      .subscribe(res => {
        this.loadingService.dismiss()
        this.leadList = res.data as Lead[] 
      }, err => {
        this.loadingService.dismiss()
        this.alertService.alert('Erro', 'Erro ao buscar os leads, tente novamente mais tarde')
        console.log(err)
      })
  }
}
