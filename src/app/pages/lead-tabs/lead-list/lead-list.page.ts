import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { LeadsService } from '../../../services/leads/leads.service';
import { LoadingService } from '../../../helpers/loading/loading.service';
import { AlertService } from '../../../helpers/alert/alert.service';
import { Lead } from 'src/app/models/lead.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.page.html',
  styleUrls: ['./lead-list.page.scss'],
})
export class LeadListPage implements OnInit, OnDestroy {
  public user;
  public leadList: Lead[] = [];
  subscription: Subscription;

  constructor(
    private userService: UserService,
    private leadsService: LeadsService,
    private loadingService: LoadingService,
    private alertService: AlertService,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscription = this.leadsService.subject.subscribe((x) => {
      this.getAvailiableLead();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ionViewDidEnter() {
    this.getAvailiableLead();
  }

  getAvailiableLead() {
    this.loadingService.present();
    const { id } = this.userService.getUser();
    this.leadsService.getLeadsToBuy(id).subscribe(
      (res) => {
        this.loadingService.dismiss();
        this.leadList = res.data as Lead[];
      },
      (err) => {
        this.loadingService.dismiss();
        this.alertService.alert(
          'Erro',
          'Erro ao buscar os leads, tente novamente mais tarde'
        );
        console.log(err);
      }
    );
  }

  cardClick(event, lead) {
    console.log('cardClick');
    this.router.navigate([
      'lead-tabs/lead-detail',
      { lead: JSON.stringify(lead) },
    ]);
  }
}
