import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/helpers/alert/alert.service';
import { LoadingService } from 'src/app/helpers/loading/loading.service';
import { Lead } from 'src/app/models/lead.model';
import { LeadsService } from 'src/app/services/leads/leads.service';
import { UserService } from 'src/app/services/user/user.service';
import { LeadListPage } from '../lead-list/lead-list.page';

@Component({
  selector: 'app-lead-detail',
  templateUrl: './lead-detail.page.html',
  styleUrls: ['./lead-detail.page.scss'],
})
export class LeadDetailPage implements OnInit {
  data: Lead;
  buyedLead = false;
  isLoading = false;

  constructor(
    private leadsService: LeadsService,
    private loadingService: LoadingService,
    private userService: UserService,
    private route: ActivatedRoute,
    private alertService: AlertService
  ) {
    this.data = JSON.parse(this.route.snapshot.paramMap.get('lead')) as Lead;
    this.buyedLead = JSON.parse(
      this.route.snapshot.paramMap.get('buyedLead')
    ) as boolean;
  }

  ngOnInit() {
    this.data.price = this.getRandomIntInclusive(40, 150);
  }

  reserveLead() {
    this.isLoading = true;
    this.loadingService.present();
    const { id } = this.userService.getUser();
    this.leadsService.reserveLead(id, this.data).subscribe(
      (res) => {
        this.isLoading = false;
        this.loadingService.dismiss();
        this.buyedLead = true;
        this.leadsService.subject.next(true);
      },
      (err) => {
        this.isLoading = false;
        this.loadingService.dismiss();
        this.alertService.alert(
          'Erro',
          'Erro ao reservar o lead, tente novamente mais tarde'
        );
        console.log(err);
      }
    );
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  openWhatsApp() {
    const phone = this.data.telefone.replace(/[^\w\s]/gi, '').trim();

    // eslint-disable-next-line max-len
    const url = `https://api.whatsapp.com/send?phone=55${phone}&text=Ol%C3%A1!%20Sou%20um%20corretor%20Lopes%20que%20atende%20em%20sua%20%C3%A1rea.%20Como%20posso%20ajudar?`;
    window.open(url, '_blank').focus();
  }
}
