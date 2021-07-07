import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeadListPageRoutingModule } from './lead-list-routing.module';

import { LeadListPage } from './lead-list.page';
import { LeadCardModule } from 'src/app/components/lead-card/lead-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeadListPageRoutingModule,
    LeadCardModule
  ],
  declarations: [LeadListPage]
})
export class LeadListPageModule {}
