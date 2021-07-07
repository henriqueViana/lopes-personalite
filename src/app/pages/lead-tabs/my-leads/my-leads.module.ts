import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyLeadsPageRoutingModule } from './my-leads-routing.module';

import { MyLeadsPage } from './my-leads.page';
import { LeadCardModule } from 'src/app/components/lead-card/lead-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyLeadsPageRoutingModule,
    LeadCardModule
  ],
  declarations: [MyLeadsPage]
})
export class MyLeadsPageModule {}
